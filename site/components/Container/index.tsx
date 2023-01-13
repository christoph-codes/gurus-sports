import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IContainer {
	className?: string;
	children?: ReactNode;
}

const Container = ({ children, className, ...rest }: IContainer & BoxProps) => (
	<Box
		className={className || ""}
		maxWidth="1200px"
		width="100%"
		marginX="auto"
		paddingX="8px"
		{...rest}
	>
		{children}
	</Box>
);

export default Container;
