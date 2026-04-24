export async function getHackMDNotes() {
  const apiKey = process.env.HACKMD_API_KEY;
  if (!apiKey) return [];

  const response = await fetch("https://api.hackmd.io/v1/notes", {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export async function getHackMDNoteContent(noteId: string) {
  const apiKey = process.env.HACKMD_API_KEY;
  if (!apiKey) return null;

  const response = await fetch(`https://api.hackmd.io/v1/notes/${noteId}`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
