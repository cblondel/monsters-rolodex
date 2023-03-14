import { useEffect } from "react";
import IonIcon from '@reacticons/ionicons';
import { useReferredState } from "../hook/useReferredState";
import { ThemeSwitcherModes, ThemeSwitcherOptions, ThemeSwitcherProps } from "./theme-switcher.interface";

const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const defaultTheme = localStorage.getItem('theme') || props.theme || ThemeSwitcherModes.SYSTEM;
    const [theme, themeRef, setTheme] = useReferredState(defaultTheme);
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    const options: ThemeSwitcherOptions[] = [
        {
            icon: "sunny",
            text: ThemeSwitcherModes.LIGHT
        },
        {
            icon: "moon",
            text: ThemeSwitcherModes.DARK
        },
        {
            icon: "desktop",
            text: ThemeSwitcherModes.SYSTEM
        }
    ];

    useEffect(() => {
        darkThemeMq.addEventListener("change", changeThemeBaseOnSystem);
        return () => darkThemeMq.removeEventListener("change", changeThemeBaseOnSystem);
    }, []);

    useEffect(() => {
        loadTheme();
    }, [theme]);

    const changeThemeBaseOnSystem = () => {
        if (themeRef.current === ThemeSwitcherModes.SYSTEM) {
            if (darkThemeMq.matches) {
                window.document.body.classList.add('dark');
            } else {
                window.document.body.classList.remove('dark');
            }
        }
    }

    const loadTheme = () => {

        switch (theme) {
            case ThemeSwitcherModes.LIGHT:
                window.document.body.classList.remove('dark');
                localStorage.setItem('theme', ThemeSwitcherModes.LIGHT);
                break;
            case ThemeSwitcherModes.DARK:
                window.document.body.classList.add('dark');
                localStorage.setItem('theme', ThemeSwitcherModes.DARK);
                break;
            default:
                localStorage.setItem('theme', ThemeSwitcherModes.SYSTEM);
                changeThemeBaseOnSystem();
                break;
        }
    }

    return (
        <div className="flex justify-end">
            {
                options.map((opt) => {
                    return (
                        <button key={opt.text} onClick={() => setTheme(opt.text)}
                            className={`rounded-full p-2 md:hover:bg-zinc-300 hover:cursor-pointer h-10 w-10 
                            ${theme === opt.text && "bg-zinc-300"}`}>
                            <IonIcon name={opt.icon} style={{ display: 'block', width: '100%', height: '100%' }} />
                        </button>
                    )
                })
            }
        </div>
    )
}

export default ThemeSwitcher;