"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

type TerminalModeContextType = {
    terminalMode: boolean;
    setTerminalMode: (value: boolean) => void;
};

const TerminalModeContext = createContext<
    TerminalModeContextType | undefined
>(undefined);

type TerminalModeProviderProps = {
    children: React.ReactNode;
};

export function TerminalModeProvider({
    children,
}: TerminalModeProviderProps) {
    const [terminalMode, setTerminalMode] = useLocalStorage(
        "terminal-mode",
        false
    );

    return (
        <TerminalModeContext.Provider
            value={{ terminalMode, setTerminalMode }}
        >
            {children}
        </TerminalModeContext.Provider>
    );
}

// 4. Hook seguro (ESSENCIAL)
export function useTerminalMode() {
    const context = useContext(TerminalModeContext);

    if (!context) {
        throw new Error(
            "useTerminalMode must be used within a TerminalModeProvider"
        );
    }

    return context;
}
