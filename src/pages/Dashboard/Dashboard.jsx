import React from "react";
import {useLanguage} from "../../contexts/MultiLanguageProvider.jsx";

export default function Dashboard() {

    const { t, changeLanguage, language } = useLanguage();

    return(
        <div className={'w-full h-screen '}></div>
    );

}