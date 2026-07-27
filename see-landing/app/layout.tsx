import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEE. Find Your Space.",
  description: "Connecting people through meaningful small-group experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0f172a", color: "#f8fafc", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}