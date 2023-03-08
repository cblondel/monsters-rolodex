import { useEffect, useState } from "react";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";

interface ThemeSwitcherProps {
    isDark: boolean;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const darkModeEnable = props.isDark || false;
    const [isDark, setIsDark] = useState(darkModeEnable);

    useEffect(() => {
        toggleThemeClass();
    }, [isDark]);

    const toggleThemeClass = () => {
        if (isDark) {
            window.document.body.classList.add('dark');
        } else {
            window.document.body.classList.remove('dark');
        }
    }

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <button onClick={toggleTheme} className="rounded-full p-2 md:hover:bg-zinc-300 hover:cursor-pointer">
            {!isDark && <img className='w-6 h-6 self-center' src={moon} />}
            {isDark && <img className='w-6 h-6 self-center' src={sun} />}
        </button>
    )
}

export default ThemeSwitcher;