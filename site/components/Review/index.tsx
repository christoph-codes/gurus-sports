import { BoxProps, Text, Image, Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import styles from "./Review.module.scss";

export interface IReviewProps {
	author: string;
	review: string | ReactNode;
}

const Review = ({ review, author, ...rest }: IReviewProps & BoxProps) => (
	<Flex
		flexDir="column"
		alignItems="center"
		className={styles.Review}
		textAlign="center"
		marginBottom="60px"
		flexBasis={{ base: "100%", md: "50%" }}
		{...rest}
	>
		<Image
			src="/review_stars.svg"
			alt="5 yellow stars for a customer review"
			maxWidth="240px"
			marginBottom={4}
		/>
		<Text fontSize="lg" maxWidth="90%">
			{review}
		</Text>
		<Text fontSize="lg" fontWeight="bold">
			- {author}
		</Text>
	</Flex>
);

export default Review;
