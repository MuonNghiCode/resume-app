import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "resume-app",
  description: "Portfolio of Phạm Minh Quân, a passionate front-end developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Title */}
        <title>{String(metadata.title) || "Default Title"}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
