"use client";

export default function Grid({ children }) {

    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 grid-bg z-30"
        >
            {children}
        </div>
    );
}
