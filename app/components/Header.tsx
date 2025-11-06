'use client'
import {useRouter} from 'next/navigation';
// import React, { useEffect, useState } from "react";

const Header = () => {
    const router = useRouter();
    // const [mounted, setMounted] = useState(false)

    // useEffect(() => {
    //     setMounted(true);
    // }, []);
    return (
        <header className="w-full min-h-40px bg-white text-black justify-end p-8">
            <div className="flex justify-end">
                
                <h1 
                    onClick={() => router.push("/")}
                    className="font-medium cursor-pointer mob:p-2  pr-10px pl-10px "
                >
                    Home.
                </h1>
                <h1
                    onClick={() => router.push("/")}
                    className="font-medium cursor-pointer mob:p-2  pr-10px pl-10px"
                >
                    Projects.
                </h1>
                <h1
                    onClick={() => router.push("/")}
                    className="font-medium cursor-pointer mob:p-2  p-10px "
                >
                    Resume.
                </h1>
                <h1
                    onClick={() => router.push("/")}
                    className="font-medium cursor-pointer mob:p-2  p-10px  "
                >
                    Contact Me.
                </h1>
            </div>
            
        </header>
    )
}

export default Header;