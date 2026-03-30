import React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { metadata as siteMetadata } from "@/config/metadata";
import AmbientSoundToggle from "@/shared/components/ui/AmbientSoundToggle";

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
                className="relative min-h-screen flex flex-col text-zinc-700 dark:text-white"
            >

                <div className="fixed inset-0 z-0 bg-texture opacity-[0.02] " />
                <AmbientSoundToggle />
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <div className="relative z-10 flex flex-col min-h-screen">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
