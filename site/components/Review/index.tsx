import { BoxProps, Flex, Text, Image, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Section, { ISectionProps } from "../Section";
import styles from "./Review.module.scss";

export interface IReviewProps extends ISectionProps {
	headshot?: string;
	author: string;
	review: string | ReactNode;
	theme: "primary" | "secondary" | "black";
}

const Review = ({
	headshot,
	review,
	author,
	theme,
	...rest
}: IReviewProps & BoxProps) => {
	return (
		<Section bgColor={`brand.${theme}.light`} {...rest}>
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection={{ base: "column", md: "row" }}
				columnGap={8}
			>
				<Image
					color={`brand.${theme}.default`}
					className={styles.Review__headshot}
					src={headshot}
					alt={`${author} Headshot for review`}
					marginBottom={{ base: 6, md: 0 }}
					maxWidth={{ base: "80%", md: "240px" }}
					width="100%"
				/>
				<Flex
					textAlign="center"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					columnGap={24}
					maxWidth={{ base: "100%", md: "60%" }}
				>
					<Image
						src="/review_stars.svg"
						alt="5 yellow stars for a customer review"
						maxWidth="240px"
						marginBottom={4}
					/>
					<Text fontSize="2xl" maxWidth="70%">
						{review}
					</Text>
					<Text fontSize="lg" fontWeight="bold">
						{author}
					</Text>
				</Flex>
			</Flex>
		</Section>
	);
};

export default Review;
