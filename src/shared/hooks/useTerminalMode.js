import { useContext } from "react";
import { TerminalModeContext } from "@/shared/context/TerminalModeContext";

/**
 * Provides access to the terminal-mode toggle state.
 *
 * Must be used inside a {@link TerminalModeProvider}.
 *
 * @returns {{ terminalMode: boolean, setTerminalMode: (value: boolean) => void }}
 */
export function useTerminalMode() {
  return useContext(TerminalModeContext);
}
