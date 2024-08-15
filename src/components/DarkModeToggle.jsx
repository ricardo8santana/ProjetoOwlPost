import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import './DarkModeToggle.css'

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDark(mediaQuery.matches);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }

    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return(
        <div className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
        </div>
    )
};

export default DarkModeToggle;