import React, {useState} from "react";
import {useAuth} from "../../contexts/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";
import {useLanguage} from "../../contexts/MultiLanguageProvider.jsx";


export default function Login() {

    const { t } = useLanguage();

    const { login } = useAuth();
    const navigate = useNavigate();

    const [username,setUsername]= useState(null);
    const [password,setPassword]= useState(null);

    const HandleLogin = () => {
        if (!username || !password) {
            let missing = [];
            if (!username) missing.push("username");
            if (!password) missing.push("password");
            alert(`Please fill in the following: ${missing.join(" and ")}`);
        } else {
            if (username === "admin" && password === "123") {
                alert("wassa");
                let token = `qwertyuiop`;
                login(token);
                navigate('/dashboard')
            } else {
                alert("Wrong username or password");
            }
        }
    }

    return(
        <div className={'w-full h-screen bg-black flex items-center justify-center'}>
            <div className={'w-[400px] h-80 rounded-xl border border-white/30 shadow hover:shadow-white/30 duration-300 py-6 px-8'}>
                <div className={'w-full flex flex-col items-start '}>
                    <span className={'text-3xl text-white/80 ml-1 mb-3'}>Username</span>
                    <input onChange={(e)=>setUsername(e.target.value)} placeholder={`username`} className={`placeholder:text-white/30 placeholder:font-thin placeholder:text-2xl pl-2 w-full h-11 rounded-lg outline-1 outline-transparent duration-300 border border-white/30 text-white text-xl focus:outline-white/50`}/>
                    <span className={'text-3xl text-white/80 ml-1 mt-2 mb-3'}>Password</span>
                    <input onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder={`password`} className={`placeholder:text-white/30 placeholder:font-thin placeholder:text-2xl pl-2 w-full h-11 rounded-lg outline-1 outline-transparent duration-300 border border-white/30 text-white text-xl focus:outline-white/50`}/>
                    <button onClick={HandleLogin} className={' hover:border-white/60 duration-300 text-white/80 text-2xl self-end w-40 h-11 rounded-lg border border-white/30 translate-y-4 centerDivRow '}>
                        <span className={`-translate-y-0.5`}>Login</span>
                    </button>
                    {/*<button onClick={()=>changeLanguage(`en`)} className={' text-white/80 text-2xl self-end w-40 h-11 rounded-lg border border-white/30 translate-y-4 centerDivRow '}>*/}
                    {/*    <span className={`-translate-y-0.5`}>Login</span>*/}
                    {/*</button>*/}
                    {/*<button onClick={()=>changeLanguage(`ru`)} className={' text-white/80 text-2xl self-end w-40 h-11 rounded-lg border border-white/30 translate-y-4 centerDivRow '}>*/}
                    {/*    <span className={`-translate-y-0.5`}>Login</span>*/}
                    {/*</button>*/}
                    {/*<button onClick={()=>changeLanguage(`uz`)} className={' text-white/80 text-2xl self-end w-40 h-11 rounded-lg border border-white/30 translate-y-4 centerDivRow '}>*/}
                    {/*    <span className={`-translate-y-0.5`}>Login</span>*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>

    );

}