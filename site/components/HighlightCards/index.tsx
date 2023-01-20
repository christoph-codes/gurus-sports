import { Flex } from "@chakra-ui/react";
import CoverCard from "../CoverCard";
import styles from "./HighlightCards.module.scss";

export interface IHighlightCardsProps {
	className?: string;
}

const HighlightCards = ({ className }: IHighlightCardsProps) => {
	return (
		<Flex
			gap="24px"
			flexDir={{ base: "column", md: "row" }}
			className={`${styles.HighlightCards} ${className || ""}`}
		>
			{/* <CoverCard
				bgImg="/specials_flex.png"
				label="Specials"
				link="/specials"
			/> */}
			<CoverCard
				bgImg="/menu_flex.png"
				variant="secondary"
				label="Menu"
				link="/menu"
			/>
			<CoverCard
				bgImg="/locations_flex.png"
				label="Locations"
				link="/locations"
			/>
			<CoverCard
				bgImg="/careers_flex.png"
				label="Careers"
				link="/careers"
			/>
		</Flex>
	);
};

export default HighlightCards;
