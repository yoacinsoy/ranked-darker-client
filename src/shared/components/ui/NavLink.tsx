import React from 'react';

type Props = {
    children: React.ReactNode;
    active?: boolean;
};

export default function NavLink({ children, active = false }: Props) {
    return (
        <span
            className={`
                text-xs uppercase tracking-widest
                font-serif cursor-pointer

                ${active
                    ? "text-amber-400"
                    : "text-zinc-400 hover:text-amber-300"
                }

                transition-colors duration-200
            `}
        >
            {children}
        </span>
    );
}
