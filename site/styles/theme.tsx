import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: {
			default: "#C93000",
			hover: "#AA3000",
			light: "#DEB7B7",
			dark: "#390000",
		},
		secondary: {
			default: "#0C0A0A",
			hover: "#282828",
			light: "#6B6B6B",
			dark: "#1E1E1E",
		},
		black: {
			default: "#000000",
		},
		white: {
			default: "#FFFFFF",
			hover: "#DEDEDE",
		},
	},
};
const fonts = {
	body: "Inter, sans-serif",
	heading: `'Bebas Neue', sans-serif`,
	mono: "Menlo, monospace",
};
const styles = {
	global: {
		p: {
			marginBottom: "24px",
		},
	},
};

const theme = extendTheme({ colors, fonts, styles });

export default theme;
