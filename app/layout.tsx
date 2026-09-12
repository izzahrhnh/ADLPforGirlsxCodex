import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "SIFT — F&B Business Management", description: "SIFT helps small F&B businesses manage orders, inventory and insights." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
