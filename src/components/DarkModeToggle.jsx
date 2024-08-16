import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import './DarkModeToggle.css'

const DarkModeToggle = () => {
    const prefersDarkMode =
        localStorage.getItem('theme') === 'dark-mode' || 
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDark, setIsDark] = useState(prefersDarkMode);

    const setTheme = (prefersDarkTheme) => {
        setIsDark(prefersDarkTheme);

        if (prefersDarkTheme) {
            localStorage.setItem('theme', 'dark-mode');
            document.body.classList.add('dark-mode');
        }
        else {
            localStorage.setItem('theme', 'light-mode');
            document.body.classList.remove('dark-mode');
        }
    }

    return(
        <div className="theme-toggle" onClick={() => setTheme(!isDark)}>
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
        </div>
    )
};

export default DarkModeToggle;