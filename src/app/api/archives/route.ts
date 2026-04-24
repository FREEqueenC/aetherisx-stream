import { getHackMDNotes, getHackMDNoteContent } from "@/lib/hackmd";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const note = await getHackMDNoteContent(id);
      return NextResponse.json(note);
    }

    const notes = await getHackMDNotes();
    return NextResponse.json(notes);
  } catch (error: any) {
    console.error("HackMD Fetch Error:", error);
    return NextResponse.json({ 
      error: "Archive link failed", 
      details: error.message 
    }, { status: 500 });
  }
}
