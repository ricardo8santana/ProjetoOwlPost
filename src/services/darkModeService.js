const ThemeStorageKey = 'theme';
const ThemeDark = 'dark';
const ThemeLight = 'light';

export const setTheme = (prefersDarkMode) => {
    if (prefersDarkMode) {
        localStorage.setItem(ThemeStorageKey, ThemeDark);
        document.body.classList.add('dark-mode');
    }
    else {
        localStorage.setItem(ThemeStorageKey, ThemeLight);
        document.body.classList.remove('dark-mode');
    }
};

export const loadTheme = () => {
    const currentTheme = localStorage.getItem(ThemeStorageKey);

    let prefersDarkMode = currentTheme !== null
        ? currentTheme === ThemeDark
        : window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDarkMode;
};