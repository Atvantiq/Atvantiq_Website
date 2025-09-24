import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atvantiq Networks",
  description: "Atvantiq Networks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="poppins">
        {children}
      </body>
    </html>
  );
}
