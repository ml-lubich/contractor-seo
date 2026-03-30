import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { GeneratedPage, Trade } from "./types";
import { generateSEOContent } from "./seo-generator";

let tableChecked = false;

async function ensureTable() {
  if (tableChecked) return;

  const admin = createAdminClient();
  const { error } = await admin.from("generated_pages").select("id").limit(1);

  if (error?.message?.includes("does not exist")) {
    // Create the table using raw SQL via admin client
    const { error: createError } = await admin.rpc("_create_generated_pages_table");
    if (createError) {
      // Table creation via RPC failed — try a direct insert to see if table exists now
      // This can happen if the RPC doesn't exist. The migration SQL needs to be run manually.
      console.warn(
        "Could not auto-create table. Please run the migration SQL from supabase/migrations/001_create_generated_pages.sql in your Supabase SQL Editor."
      );
    }
  }

  tableChecked = true;
}

export async function getUserPages(): Promise<GeneratedPage[]> {
  await ensureTable();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("generated_pages")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function getPageBySlug(slug: string): Promise<GeneratedPage | null> {
  await ensureTable();
  const admin = createAdminClient();
  const { data, error } = await admin
    .from("generated_pages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data;
}

export async function createPage(input: {
  trade: Trade;
  city: string;
  state: string;
  businessName: string;
  phone: string;
  slug: string;
}): Promise<GeneratedPage> {
  await ensureTable();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const seoContent = generateSEOContent(
    input.trade,
    input.city,
    input.state,
    input.businessName,
    input.phone
  );

  const { data, error } = await supabase
    .from("generated_pages")
    .insert({
      user_id: user.id,
      trade: input.trade,
      city: input.city,
      state: input.state,
      business_name: input.businessName,
      phone: input.phone,
      slug: input.slug,
      seo_content: seoContent,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deletePage(id: string): Promise<void> {
  await ensureTable();
  const supabase = await createClient();
  const { error } = await supabase
    .from("generated_pages")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
}
