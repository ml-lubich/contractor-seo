import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const admin = createAdminClient();

  // Check if table exists by attempting a query
  const { error } = await admin.from("generated_pages").select("id").limit(1);

  if (error?.message?.includes("does not exist")) {
    // Read the migration SQL file
    let sql = "";
    try {
      sql = readFileSync(
        join(process.cwd(), "supabase/migrations/001_create_generated_pages.sql"),
        "utf-8"
      );
    } catch {
      sql = "-- Could not read migration file. Check supabase/migrations/001_create_generated_pages.sql";
    }

    return NextResponse.json({
      status: "needs_migration",
      message:
        "The generated_pages table does not exist. Run the SQL below in your Supabase SQL Editor.",
      instructions: [
        "1. Go to https://supabase.com/dashboard/project/yxpxfmsyyhcnllqcpicp/sql/new",
        "2. Paste the SQL below",
        "3. Click 'Run'",
        "4. Refresh this page to verify",
      ],
      sql,
    });
  }

  if (error) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }

  // Count rows for extra info
  const { count } = await admin
    .from("generated_pages")
    .select("*", { count: "exact", head: true });

  return NextResponse.json({
    status: "ok",
    message: "Database is set up correctly.",
    pageCount: count ?? 0,
  });
}
