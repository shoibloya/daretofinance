/**  app/page.tsx  – runs on the server.
 *   Redirects unauthenticated visitors to /login,
 *   otherwise streams the real dashboard UI.
 */
 import { redirect } from "next/navigation";
 import { isAuthed } from "@/lib/auth";          //   <-- from the auth helpers you already have
 import DashboardClient from "@/components/DashboardClient";
 
 export default function Home() {
   // server-side cookie check
   if (!isAuthed()) redirect("/login");
 
   // authenticated ⇒ render the existing client dashboard
   return <DashboardClient />;
 }
 