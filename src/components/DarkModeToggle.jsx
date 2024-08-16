import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import './DarkModeToggle.css'

const ThemeStorageKey = 'theme';
const ThemeDark = 'dark';
const ThemeLight = 'light';

const DarkModeToggle = () => {
    const [useDarkMode, setUseDarkMode] = useState(false);

    const setTheme = (prefersDarkMode) => {
        setUseDarkMode(prefersDarkMode);

        if (prefersDarkMode) {
            localStorage.setItem(ThemeStorageKey, ThemeDark);
            document.body.classList.add('dark-mode');
        }
        else {
            localStorage.setItem(ThemeStorageKey, ThemeLight);
            document.body.classList.remove('dark-mode');
        }
    };

    useEffect(() => {
        const mediaQuery = '(prefers-color-scheme: dark)';
        const prefersDarkMode =
            localStorage.getItem(ThemeStorageKey) === ThemeDark ||
            window.matchMedia(mediaQuery).matches;

        setTheme(prefersDarkMode);
    }, []);

    return (
        <div className="theme-toggle" onClick={() => setTheme(!useDarkMode)}>
            <FontAwesomeIcon icon={useDarkMode ? faMoon : faSun} />
        </div>
    )
};

export default DarkModeToggle;