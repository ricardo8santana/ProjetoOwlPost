import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import './DarkModeToggle.css'

import * as darkModeService from '../services/darkModeService';

const DarkModeToggle = () => {
    const [useDarkMode, setUseDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = darkModeService.loadTheme();
        darkModeService.setTheme(prefersDarkMode);
        setUseDarkMode(prefersDarkMode);
    }, []);

    return (
        <div className="theme-toggle" onClick={() => setTheme(!useDarkMode)}>
            <FontAwesomeIcon icon={useDarkMode ? faMoon : faSun} />
        </div>
    )
};

export default DarkModeToggle;