import { Flex, FlexProps, Text } from "@chakra-ui/react";
import Title from "../Title";
import styles from "./PageHeader.module.scss";

export interface IPageHeaderProps extends FlexProps {
	className?: string;
	title: string;
	description?: string;
}

const PageHeader = ({
	className,
	title,
	description,
	...rest
}: IPageHeaderProps) => {
	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			className={`${styles.PageHeader} ${className || ""}`}
			flexDir={{ base: "column", md: "row" }}
			padding={{ base: "0 0 32px", md: 0 }}
			marginBottom={{ base: "32px", md: "48px" }}
			{...rest}
		>
			<Title>{title}</Title>
			{description && (
				<Text
					maxWidth={{ base: "100%", md: "60%" }}
					textAlign={{ base: "center", md: "right" }}
				>
					{description}
				</Text>
			)}
		</Flex>
	);
};

export default PageHeader;
