import { NextRequest, NextResponse } from "next/server";
import { createPage, getUserPages } from "@/lib/db";
import { Trade } from "@/lib/types";

export async function GET() {
  try {
    const pages = await getUserPages();
    return NextResponse.json(pages);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch pages";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { trade, city, state, businessName, phone, slug } = body;

    if (!trade || !city || !state || !businessName || !phone || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const page = await createPage({
      trade: trade as Trade,
      city,
      state,
      businessName,
      phone,
      slug,
    });

    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create page";
    const status = message === "Not authenticated" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
