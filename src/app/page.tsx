"use client"

import { LandingPageAccordion } from "@/components/accordion";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"
import WordRotate from "@/components/ui/word-rotate";

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [particleColor, setParticleColor] = useState("#FFFFFF")
  
  const [systemTheme, setSystemTheme] = useState('light');

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemTheme = () => setSystemTheme(matchMedia.matches ? 'dark' : 'light');
    updateSystemTheme();
    matchMedia.addEventListener('change', updateSystemTheme);
    return () => matchMedia.removeEventListener('change', updateSystemTheme);
  }, []);
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="flex flex-col px-12 relative">
      <div className="absolute inset-0 z-0">
        <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={currentTheme === "dark" ? "#FFFFFF" : "#000000"}
          />
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-64px)] z-10">
        <div className="col-span-7 flex flex-col justify-center">
          <div className="text-7xl font-bold inline">say no to meth, but yes to&nbsp;
            <WordRotate 
            className="text-7xl font-bold inline"
            words={["CANNABIS", "ALCOHOL", "VALORANT", "GENSHIN IMPACT", "GAMBLING"]} />
          </div>
          <p className="text-xl py-2">
            drugs are bad for your health. try a different addiction.
          </p>
        </div>
        <div className="col-span-5 flex flex-col justify-center items-center">
        </div>
      </div>
      <div className="flex flex-rows h-[calc(100vh-64px)] py-6 z-20">
        <LandingPageAccordion />
      </div>
    </div>
  );
}
