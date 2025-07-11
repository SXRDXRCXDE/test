import React from "react";
import { useSelector} from "react-redux";
import {selectIsMenuOpen} from "../../store/slices/menuSlice.js";
import MenuButton from "./MenuButton";
import {GraduationCap, House, LayoutDashboard} from "lucide-react";
import MenuItem from "./MenuItem";
import {useNavigate} from "react-router-dom";
import DropdownItem from "./DropdownItem";


export default function Sidebar() {
    const isOpen = useSelector(selectIsMenuOpen);
    const navigate = useNavigate();

    return(
        <div className={` flex-shrink-0 ${isOpen? `w-16` : `w-80`} flex items-start duration-300 h-full border-r border-white/30`}>
            <div className={'flex-shrink-0 p-2 gap-2 border-r border-white/30 w-16 h-full overflow-hidden flex flex-col items-start'}>
                <MenuButton icon={<LayoutDashboard size={20} />} onClick={()=>navigate(`dashboard`)} path={`/dashboard`} />
                <MenuButton icon={<GraduationCap size={20} />} onClick={()=>navigate(`education`)} path={`/education`} />
            </div>
            <div className={'w-full h-full flex flex-col items-start text-white whitespace-nowrap overflow-hidden'}>
                <div className={'flex-shrink-0 w-full h-14 border-b border-white/30'}></div>

                <div className={'w-full h-full overflow-y-auto'}>
                    <div className={'w-full flex flex-col items-start gap-2 p-2 '}>
                        <MenuItem icon={<House className={`flex-shrink-0`} size={20} />} onClick={()=>navigate(`dashboard/home`)} title={'Home'} path={'/dashboard/home'}/>
                        <DropdownItem title={`Wassa`} icon={<LayoutDashboard size={20} />} children={<div className={'w-full flex flex-col items-start gap-2'}>
                            <MenuItem icon={<LayoutDashboard size={20} />} onClick={()=>navigate(`dashboard/education`)} path={`/dashboard/education`} title={`Nigga`}/>
                        </div>} />
                    </div>

                </div>

            </div>
        </div>
    );

}