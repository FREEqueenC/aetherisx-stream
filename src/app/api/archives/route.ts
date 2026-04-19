import { getHackMDNotes } from "@/lib/hackmd";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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
