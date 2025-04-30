import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const authed = token === process.env.AUTH_SECRET;

  const { pathname } = req.nextUrl;
  const isLoginRoute = pathname.startsWith("/login") || pathname.startsWith("/api/login");

  // unauthenticated user trying to visit a protected page
  if (!authed && !isLoginRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // authenticated user visiting /login – shove them to the dashboard
  if (authed && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

/**
 * Run the middleware on every route except public files
 * (feel free to tighten the matcher – this is the simplest)
 */
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
