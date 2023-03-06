import * as React from 'react';
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";


interface ThemeSwitcherProps {
    isDark: boolean;
}

interface ThemeSwitcherState {
    isDark: boolean;
}

class ThemeSwitcher extends React.Component<ThemeSwitcherProps, ThemeSwitcherState> {

    state = {
        isDark: this.props.isDark
    }

    constructor(props: ThemeSwitcherProps) {
        super(props);

        this.toggleTheme = this.toggleTheme.bind(this);
        this.toggleThemeClass();
    }

    toggleThemeClass() {
        if (this.state.isDark) {
            window.document.body.classList.add('dark');
        } else {
            window.document.body.classList.remove('dark');
        }
    }

    toggleTheme(): void {
        this.setState(() => ({ isDark: !this.state.isDark }),
            () => this.toggleThemeClass());
    }

    render() {

        const { isDark } = this.state;

        return (
            <button onClick={this.toggleTheme} className="rounded-full p-2 md:hover:bg-zinc-300 hover:cursor-pointer">
                {!isDark && <img className='w-6 h-6 self-center' src={moon} />}
                {isDark && <img className='w-6 h-6 self-center' src={sun} />}
            </button>
        );
    }
}

export default ThemeSwitcher;