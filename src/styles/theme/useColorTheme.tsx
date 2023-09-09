import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./theme";

export const useColorTheme = () => {
	const [theme, setTheme] = useState(
		"light",
		// window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
		// 	? "dark"
		// 	: "light",
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			setTheme(mediaQuery.matches ? "dark" : "light");
		};
		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	return theme === "light" ? lightTheme : darkTheme;
};
