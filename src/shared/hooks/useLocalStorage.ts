import { useEffect, useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    // 1. Carregar do localStorage (client only)
    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item !== null) {
                setStoredValue(JSON.parse(item));
            }
        } catch {
            // ignore
        }
    }, [key]);

    // 2. Setter seguro (aceita função como useState)
    const setValue = (value: T | ((prev: T) => T)) => {
        try {
            setStoredValue((prev) => {
                const valueToStore =
                    value instanceof Function ? value(prev) : value;

                window.localStorage.setItem(key, JSON.stringify(valueToStore));

                return valueToStore;
            });
        } catch {
            // ignore
        }
    };

    return [storedValue, setValue];
}
