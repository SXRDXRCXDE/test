import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useLanguage} from "../../contexts/MultiLanguageProvider.jsx";


export default function LanguageDropdown() {

    const languages = [
        { code: 'en', label: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/960px-Flag_of_the_United_States_%28Web_Colors%29.svg.png' },
        { code: 'ru', label: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg' },
        { code: 'uz', label: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg' },
    ];

    const { language, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!open);
    const handleSelect = (lang) => {
        changeLanguage(lang);
        setOpen(false);
    };

    return(
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="px-2 py-2 flex  text-white rounded-lg shadow border border-transparent hover:border-white/30 duration-300 transition-all"
            >
                <img className={'w-7 h-5 object-left object-cover'} src={languages.find(l => l.code === language)?.label} alt={``}/>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-12 bg-black border border-white/30 text-white rounded-md shadow-lg z-50 overflow-hidden"
                    >
                        {languages.map((lang) => (
                            <li
                                key={lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className={`px-3 py-2 hover:bg-gray-900 duration-300 cursor-pointer ${
                                    lang.code === language ? 'bg-gray-900' : ''
                                }`}
                            >
                                <img className={'w-7 h-5 object-left object-cover'} src={lang.label} alt={``}/>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}