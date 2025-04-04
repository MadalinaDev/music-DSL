"use client";

import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}{" "}
            <footer className="bg-muted text-muted-foreground text-sm text-center p-3 mt-2">
              © 2025 Music DSL. A project developed by Amza Vladislav,
              Chirpicinic Mădălina, Popescu Sabina, Postoroncă Dumitru, Racoviță
              Dumitru, team of FAF-233.
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
