import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DropdownItem({ icon, title , children }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div
            className={`border ${isOpen ? 'border-white/30' : 'border-transparent'} 
        rounded-md w-full flex flex-col items-start whitespace-nowrap flex-shrink-0
        bg-transparent duration-300`}
        >
            {/* Toggle header */}
            <div
                onClick={() => setOpen(!isOpen)}
                className="flex-shrink-0 w-full h-10 text-white px-4 flex items-center justify-between cursor-pointer"
            >
                <div className={'flex items-center gap-2'}>
                    {icon}
                    <span>{title}</span>
                </div>

                <ChevronUp
                    className={`transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
                    size={20}
                />
            </div>

            {/* Animated dropdown content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="dropdown-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden w-full"
                    >
                        <div className="w-full pl-4 pr-2 py-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
