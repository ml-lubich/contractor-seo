import { NextRequest, NextResponse } from "next/server";
import { deletePage } from "@/lib/db";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deletePage(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to delete page";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
