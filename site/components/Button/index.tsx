import { HTMLAttributeAnchorTarget, ReactElement } from "react";
import styles from "./Button.module.scss";

export interface IButtonProps {
	className?: string;
	children?: ReactElement | string;
	variant?:
		| "primary"
		| "primary-outline"
		| "secondary"
		| "secondary-outline"
		| "tertiary"
		| "tertiary-outline"
		| "quad"
		| "quad-outline"
		| "white"
		| "black"
		| "black-outline";
	href?: string;
	fullWidth?: boolean;
	target?: HTMLAttributeAnchorTarget;
	type?: HTMLButtonElement["type"];
}

const Button = ({
	children,
	className,
	variant = "primary",
	fullWidth,
	href,
	target,
	type,
	...rest
}: IButtonProps) => {
	const Tag: "a" | "button" = typeof href === "string" ? "a" : "button";
	return (
		<Tag
			type={href ? undefined : type === "submit" ? type : "button"}
			href={href}
			className={`${styles.Button} ${className} ${
				variant ? styles[`Button__${variant}`] : ""
			} ${fullWidth ? styles.Button__fullWidth : ""}`}
			target={href && target}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Button;
