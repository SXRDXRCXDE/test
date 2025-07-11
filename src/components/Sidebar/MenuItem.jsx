import React from "react";
import { useLocation } from "react-router-dom";

export default function MenuItem({ icon, title, onClick, path }) {
    const location = useLocation();
    const isActive = path && location.pathname.startsWith(path);

    return (
        <button
            onClick={onClick}
            className={`
        whitespace-nowrap flex-shrink-0 w-full h-10 rounded-lg flex items-center gap-2 px-4 transition-all
        ${isActive
                ? "bg-white border text-black border-white hover:bg-white hover:text-black" // Active stays solid
                : " text-white/70 border-white/50 hover:bg-white hover:text-black" // Inactive hover effect
            }
      `}
        >
            {icon}
            <span className="text-lg">{title}</span>
        </button>
    );
}
