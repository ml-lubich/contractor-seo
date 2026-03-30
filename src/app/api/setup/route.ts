import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MIGRATION_SQL = `
-- Create the generated_pages table
create table if not exists public.generated_pages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  trade text not null,
  city text not null,
  state text not null,
  business_name text not null,
  phone text not null,
  slug text not null unique,
  seo_content jsonb,
  is_published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
`;

export async function GET() {
  const admin = createAdminClient();

  // Check if table exists
  const { error } = await admin.from("generated_pages").select("id").limit(1);

  if (error?.message?.includes("does not exist")) {
    return NextResponse.json({
      status: "needs_migration",
      message: "The generated_pages table does not exist yet. Please run the SQL migration in your Supabase SQL Editor.",
      sql: MIGRATION_SQL,
      instructions: [
        "1. Go to https://supabase.com/dashboard/project/yxpxfmsyyhcnllqcpicp/sql",
        "2. Paste the SQL from supabase/migrations/001_create_generated_pages.sql",
        "3. Click 'Run'",
      ],
    });
  }

  if (error) {
    return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
  }

  return NextResponse.json({ status: "ok", message: "Database is set up correctly." });
}
