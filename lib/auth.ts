// simple helpers that every file can import
import { cookies } from "next/headers";

const COOKIE_NAME = "auth_token";

export function setAuthCookie(value: string) {
  cookies().set({
    name: COOKIE_NAME,
    value,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export function clearAuthCookie() {
  cookies().delete(COOKIE_NAME);
}

export function isAuthed(): boolean {
  return cookies().get(COOKIE_NAME)?.value === process.env.AUTH_SECRET;
}
