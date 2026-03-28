"use client";

import { Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTerminalMode } from "@/shared/hooks/useTerminalMode";

export default function DarkModeToggle() {
    const { terminalMode, setTerminalMode } = useTerminalMode();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-4">
            <button
                type="button"
                onClick={() => setTerminalMode(!terminalMode)}
                aria-label={
                    terminalMode ? "Disable terminal mode" : "Enable terminal mode"
                }
                aria-pressed={terminalMode}
                className={`p-2 rounded-lg backdrop-blur-md hover:scale-110 transition-all duration-300 hidden sm:inline whitespace-nowrap
    ${theme === "dark"
                        ? "silver-glow bg-zinc-900"
                        : "neon-light bg-zinc-700 border-none!"
                    }`}
            >
                <Terminal
                    aria-hidden="true"
                    className={`w-5 h-5 transition-colors ${terminalMode
                        ? "text-green-400"
                        : "text-zinc-500 dark:text-zinc-400"
                        }`}
                />
            </button>

            <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={
                    theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
                className={`relative flex items-center w-20 h-10 rounded-full transition-all duration-500 ${theme === "dark"
                    ? "silver-glow bg-zinc-900"
                    : "neon-light bg-zinc-300/30"
                    }`}
            >
                <div
                    className={`absolute flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 transform ${theme === "dark"
                        ? "translate-x-10 bg-zinc-800"
                        : "translate-x-1"
                        }`}
                >
                    {theme === "dark" ? (
                        <Moon
                            aria-hidden="true"
                            className="w-5 h-5 text-white drop-shadow-[0_0_6px_rgba(0,180,255,0.9)]"
                        />
                    ) : (
                        <Sun
                            aria-hidden="true"
                            className="w-5 h-5 text-zinc-500 drop-shadow-[0_0_6px_rgba(255,200,0,0.9)]"
                        />
                    )}
                </div>
            </button>
        </div>
    );
}
