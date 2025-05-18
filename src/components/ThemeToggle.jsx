import {useState} from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return <button>{isDarkMode ? <Sun /> : <Moon />}</button>
}