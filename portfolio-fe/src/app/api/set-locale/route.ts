import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { locale } = await req.json();
  const cookieStore = cookies();
  (await cookieStore).set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return NextResponse.json({ success: true });
}
