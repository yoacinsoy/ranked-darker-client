"use client";

import { createContext } from "react";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

export const TerminalModeContext = createContext(null);

export function TerminalModeProvider({ children }) {
  const [terminalMode, setTerminalMode] = useLocalStorage(
    "terminal-mode",
    false,
  );

  return (
    <TerminalModeContext.Provider value={{ terminalMode, setTerminalMode }}>
      {children}
    </TerminalModeContext.Provider>
  );
}
