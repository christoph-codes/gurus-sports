import Button from "@/components/Button";
import HighlightCards from "@/components/HighlightCards";
import PageHeader from "@/components/PageHeader";
import Title from "@/components/Title";
import PageTemplate from "@/templates/Page";
import { positions } from "@/utils/positions";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "./Careers.module.scss";

const Careers = () => {
	return (
		<PageTemplate
			metaTitle="Careers » Guru's Sports Bar & Grill"
			metaDescription="Check out our open positions with Guru's Sports Bar & Grill located in St. George Utah"
		>
			<PageHeader
				title="Careers"
				description="Check out our open positions to join our amazing staff of serving the best restaurant community in St. George"
			/>
			{positions.map((pos, index) => {
				return (
					<Box key={index} marginBottom="32px">
						<Flex
							justifyContent="space-between"
							flexDir={{ base: "column", md: "row" }}
						>
							<Box marginBottom={{ base: "16px", md: "0" }}>
								<Title h3>{pos.title}</Title>
								<Text>{pos.shortDescription}</Text>
							</Box>
							<Flex>
								<Button
									className={styles.Careers__viewBtn}
									href={`/careers/${pos.slug}`}
								>
									View Position
								</Button>
							</Flex>
						</Flex>
					</Box>
				);
			})}
			<Box
				paddingTop="32px"
				marginY="32px"
				borderTop="solid 1px"
				borderColor="brand.secondary.hover"
			>
				<Text textAlign="center">
					Be sure to constantly check back for more new current
					openings coming soon.
					<br />
					❤️
				</Text>
			</Box>
			<HighlightCards />
		</PageTemplate>
	);
};

export default Careers;
