import { NextResponse } from "next/server";
import { setAuthCookie } from "@/lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const ok =
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD;

  if (!ok) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // success → set cookie and tell the client to redirect
  const res = NextResponse.json({ ok: true });
  setAuthCookie(process.env.AUTH_SECRET!);
  return res;
}
