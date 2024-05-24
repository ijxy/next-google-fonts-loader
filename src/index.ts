import { LoadGoogleFontsInput, loadGoogleFonts } from "google-fonts-file-loader";

export type Font = import("next/dist/compiled/@vercel/og/satori").Font;

export async function loader(
  fonts: LoadGoogleFontsInput["fonts"],
  text?: LoadGoogleFontsInput["text"],
): Promise<Array<Font>> {
  return await loadGoogleFonts({ fonts, text });
}
