import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Title from "../Title";

export interface ICoverCardProps {
	bgImg: string;
	link: string;
	label: string;
	variant?: "primary" | "secondary";
}

const CoverCard = ({
	bgImg,
	link,
	label,
	variant = "primary",
}: ICoverCardProps) => {
	return (
		<Box
			as={Link}
			href={link}
			bgImg={bgImg}
			bgSize="cover"
			backgroundRepeat="no-repeat"
			padding="160px 0 16px"
			maxHeight="290px"
			flex={1}
			borderRadius="8px"
		>
			<Box
				paddingX="16px"
				bgGradient={`linear(to-r, brand.${variant}.default, transparent)`}
			>
				<Title h2 marginBottom={0}>
					{label}
				</Title>
			</Box>
		</Box>
	);
};

export default CoverCard;
