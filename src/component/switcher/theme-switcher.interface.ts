export enum ThemeSwitcherModes {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

export interface ThemeSwitcherProps {
  theme?: ThemeSwitcherModes;
}

export type ThemeSwitcherIcons = "sunny" | "moon" | "desktop";

export interface ThemeSwitcherOptions {
  icon: ThemeSwitcherIcons;
  text: string;
}
