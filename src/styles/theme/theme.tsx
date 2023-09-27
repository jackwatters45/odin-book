import { css } from "styled-components";

export const lightTheme = {
	colors: {
		textPrimary: "#1c1e21",
		textSecondary: "#65676B",
		backgroundPrimary: "rgb(255, 255, 255)",
		backgroundSecondary: "#f0f2f5",
		border: "rgba(0, 0, 0, 0.2)",
		selected: "rgba(0, 100, 0, 0.1)",

		primaryIcon: "#1c1e21",
		secondaryIcon: "#65676B",

		primaryButton: "#e4e6eb",
		secondaryButton: "#f0f2f5",

		blueText: "#216fdb",

		blueButton: "#1b74e4",
		blueButtonTextColor: "#ffffff",

		secondaryBlueButton: "#e7f3ff",
		secondaryBlueButtonTextColor: "#1877f2",

		selectedBlue: "#1877f2",

		backdropColor: "rgba(244, 244, 244, 0.8)",

		hoverBackground: "#f0f2f5",
		hoverOverlay: "rgba(0, 0, 0, 0.05)",
	},
	cardShadow: css`
		box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	`,

	shadowBorder: css`
		box-shadow: inset 0 0 0 0.25px rgba(0, 0, 0, 0.2);
	`,

	sectionShadow: css`
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
	`,

	hoverStyle: css`
		&:hover {
			background-color: rgba(255, 255, 255, 0.055);
			border-radius: 4px;
		}
	`,
};
export const darkTheme = {
	colors: {
		textPrimary: "rgba(255, 255, 255, 0.81)",
		textSecondary: "rgb(127, 127, 127)",
		backgroundPrimary: "rgb(255, 25, 25)",
		backgroundSecondary: "#f0f2f5",
		border: "rgba(255, 255, 255, .3)",
		selected: "rgb(55, 55, 55)",
	},
	shadow: css`
		box-shadow: rgb(15 15 15 / 15%) 0px 0px 0px 2px, rgb(15 15 15 / 15%) 0px 3px 6px;
	`,

	hoverStyle: css`
		&:hover {
			background-color: rgba(255, 255, 255, 0.055);
			border-radius: 4px;
		}
	`,

	hoverNoBorder: css`
		&:hover {
			background-color: rgba(255, 255, 255, 0.055);
		}
	`,
};
