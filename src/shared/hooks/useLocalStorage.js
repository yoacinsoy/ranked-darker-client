import { useEffect, useState } from "react";

/**
 * Persists a value to localStorage and syncs it across renders.
 *
 * @template T
 * @param {string} key - The localStorage key.
 * @param {T} initialValue - The initial value used when the key is not yet stored.
 * @returns {[T, (value: T) => void]}
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        setStoredValue(JSON.parse(item));
      }
    } catch {
      // localStorage is unavailable (e.g., SSR or private mode) — use initialValue
    }
  }, [key]);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Silently ignore write errors
    }
  };

  return [storedValue, setValue];
}
