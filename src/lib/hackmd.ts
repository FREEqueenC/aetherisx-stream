export async function getHackMDNotes() {
  const apiKey = process.env.HACKMD_API_KEY;
  if (!apiKey) throw new Error("HACKMD_API_KEY not configured");

  const response = await fetch("https://api.hackmd.io/v1/notes", {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HackMD API Failure: ${response.statusText}`);
  }

  return response.json();
}

export async function getHackMDNoteContent(noteId: string) {
  const apiKey = process.env.HACKMD_API_KEY;
  if (!apiKey) throw new Error("HACKMD_API_KEY not configured");

  const response = await fetch(`https://api.hackmd.io/v1/notes/${noteId}`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HackMD Content Failure: ${response.statusText}`);
  }

  return response.json();
}
