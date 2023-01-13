import { Image } from "@chakra-ui/react";
import styles from "./Logo.module.scss";

export interface ILogoProps {
	className?: string;
}

const Logo = ({ className }: ILogoProps) => {
	return (
		<Image
			alt="Guru's Sports Bar & Grill Logo"
			className={`${styles.Logo} ${className || ""}`}
			src="/logo.svg"
		/>
	);
};

export default Logo;
