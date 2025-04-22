/**
 * Formats a PDB ID to ensure consistent capitalization and format
 * @param pdbId The protein data bank ID to format
 * @returns The formatted PDB ID
 */
export function formatPdbId(pdbId: string): string {
  if (!pdbId) return "";
  // PDB IDs are typically 4 characters, and we'll enforce uppercase
  return pdbId.trim().toUpperCase().substring(0, 4);
}
