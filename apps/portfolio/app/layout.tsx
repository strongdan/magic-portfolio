import "@venture-lab/ui/styles.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"Venture Lab · Top Five", description:"Evidence-backed tools for difficult institutional work." };
export default function Layout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
