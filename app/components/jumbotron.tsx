'use client'
import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

const Jumbotron = () => {
//   const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
<div className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300`}>      
    <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
        Hello 👋
    </h1>
    <h1 className="text-3xl">My name is Pat Corcoran</h1>
        <p className="mt-5 opacity-40 text-xl">
            - a curious designer and developer based in Chicago, IL.      
        </p>
    </div>
  );
};

export default Jumbotron;
