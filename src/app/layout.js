import { ThemeProvider } from "next-themes";
import { metadata as siteMetadata } from "@/config/metadata";
import { TerminalModeProvider } from "@/shared/context/TerminalModeContext";
import { Cinzel } from "next/font/google";

import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${cinzel.className} text-zinc-700 dark:text-white min-h-screen flex flex-col`}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <TerminalModeProvider>{children}</TerminalModeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
