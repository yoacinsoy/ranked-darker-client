import React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { metadata as siteMetadata } from "@/config/metadata";
import { TerminalModeProvider } from "@/shared/context/TerminalModeContext";
import { Cinzel } from "next/font/google";

import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"] });

// Tipagem correta do metadata do Next.js
export const metadata: Metadata = siteMetadata;

// Tipagem do props (ESSENCIAL no TS)
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body
                className={`${cinzel.className} text-zinc-700 dark:text-white min-h-screen flex flex-col`}
            >
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <TerminalModeProvider>{children}</TerminalModeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
