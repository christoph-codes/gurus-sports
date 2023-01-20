import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CoverCard from "../CoverCard";
import styles from "./HighlightCards.module.scss";

export interface IHighlightCardsProps {
	className?: string;
}

const HighlightCards = ({ className }: IHighlightCardsProps) => {
	const { pathname } = useRouter();
	return (
		<Flex
			gap="24px"
			flexDir={{ base: "column", md: "row" }}
			marginBottom="24px"
			className={`${styles.HighlightCards} ${className || ""}`}
		>
			{/* <CoverCard
				bgImg="/specials_flex.png"
				label="Specials"
				link="/specials"
			/> */}
			{pathname !== "/menu" && (
				<CoverCard bgImg="/menu_flex.png" label="Menu" link="/menu" />
			)}
			{pathname !== "/locations" && (
				<CoverCard
					bgImg="/locations_flex.png"
					variant="secondary"
					label="Locations"
					link="/locations"
				/>
			)}
			{pathname !== "/careers" && (
				<CoverCard
					bgImg="/careers_flex.png"
					label="Careers"
					link="/careers"
				/>
			)}
		</Flex>
	);
};

export default HighlightCards;
