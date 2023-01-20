import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import styles from "./Title.module.scss";

export interface ITitleProps extends HeadingProps {
	children: ReactNode;
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	h6?: boolean;
	textAlign?: HeadingProps["textAlign"];
	className?: string;
	rest?: any;
}

const Title = ({
	children,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	textAlign = "left",
	className,
	...rest
}: ITitleProps & HeadingProps) => {
	const chosenHeader: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = h1
		? "h1"
		: h2
		? "h2"
		: h3
		? "h3"
		: h4
		? "h4"
		: h5
		? "h5"
		: h6
		? "h6"
		: "h1";
	const Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = chosenHeader;
	return (
		<Heading
			as={Tag}
			fontFamily="heading"
			className={`${styles.Title} ${className}`}
			textAlign={textAlign}
			{...rest}
		>
			{children}
		</Heading>
	);
};

export default Title;
