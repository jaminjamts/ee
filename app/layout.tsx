import type { Metadata } from "next";
import "./globals.css";
import Container from "./_components/Container";

export const metadata: Metadata = {
  title: "sample",
  description: "app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen w-screen flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}
