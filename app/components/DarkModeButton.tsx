"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
            className="absolute right-4 bottom-4"
            onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")}
        >
            {theme === "dark" ? <FaMoon /> : <FaSun />}
        </button>
    );
};

export default DarkModeButton;
