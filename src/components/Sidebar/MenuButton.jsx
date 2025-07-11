import React from "react";
import { useLocation } from "react-router-dom";

export default function MenuButton({ icon, onClick, path }) {
    const location = useLocation();
    const isActive = path && location.pathname.startsWith(path);

    return (
        <div
            onClick={onClick}
            className={`
        py-2 w-full rounded-lg overflow-hidden flex items-center justify-center duration-300
        ${isActive
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black"
            }
      `}
        >
            {icon}
        </div>
    );
}
