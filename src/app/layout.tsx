import React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { metadata as siteMetadata } from "@/config/metadata";
import { Oxanium } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body
                className={`text-zinc-700 dark:text-white min-h-screen flex flex-col`}
            >
                <ThemeProvider attribute="class" defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
