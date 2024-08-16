import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import './DarkModeToggle.css'

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const prefersDarkMode =
            localStorage.getItem('theme') === 'dark-mode' || 
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        setIsDark(prefersDarkMode);
    }, [])

    const setTheme = (prefersDarkMode) => {
        setIsDark(prefersDarkMode);

        if (prefersDarkMode) {
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