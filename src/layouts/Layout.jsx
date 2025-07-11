import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Header from "../components/Header/Header";

export default function Layout() {

    return(
        <div className={' flex items-start bg-black w-screen h-screen overflow-hidden'}>

            <Sidebar/>

            <div className={'w-full flex flex-col items-start'}>
                <Header/>
                <main className={'w-full h-full overflow-y-auto'}>
                    <Outlet/>
                </main>

            </div>


        </div>
    );

}