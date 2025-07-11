import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {PanelRightClose} from "lucide-react";
import {selectIsMenuOpen, toggleMenu} from "../../store/slices/menuSlice.js";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import ThemeChanger from "../ThemeChanger/ThemeChanger";


export default function Header() {

    const isOpen = useSelector(selectIsMenuOpen);
    const dispatch = useDispatch();



    return(
        <div className={' relative px-4 flex items-center justify-between w-full h-14 border-b border-white/30 flex-shrink-0'}>
            <div className={`flex items-center gap-2 `}>
                <div onClick={()=>dispatch(toggleMenu())} className={'p-2 rounded-lg overflow-hidden text-white hover:text-black hover:bg-white duration-300 '}>
                    <PanelRightClose className={`${isOpen? `rotate-0` : `rotate-180`} duration-300 `} size={20} />
                </div>
            </div>
            <div className={`flex items-center gap-2 `}>
                <ThemeChanger/>
                <LanguageDropdown/>
                <div className={'flex items-center gap-2 '}>
                    <div className={' hover:border-white/50 duration-300 rounded-full overflow-hidden border border-white/30 w-8 h-8'}>
                        <img className={'w-full h-full object-cover'} src={'https://placehold.co/600x400?text=Wassa'} alt={``}/>
                    </div>
                </div>
            </div>
        </div>
    );
}