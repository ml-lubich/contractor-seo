import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const admin = createAdminClient();

  const { error } = await admin.from("generated_pages").select("id").limit(1);

  if (error?.message?.includes("does not exist")) {
    return NextResponse.json({
      status: "needs_migration",
      message:
        "The generated_pages table does not exist. Run the migration SQL in your Supabase SQL Editor.",
      instructions: [
        "1. Go to your Supabase project SQL Editor",
        "2. Paste the SQL from supabase/migrations/001_create_generated_pages.sql",
        "3. Click 'Run'",
        "4. Refresh this page to verify",
      ],
    });
  }

  if (error) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }

  const { count } = await admin
    .from("generated_pages")
    .select("*", { count: "exact", head: true });

  return NextResponse.json({
    status: "ok",
    message: "Database is set up correctly.",
    pageCount: count ?? 0,
  });
}
