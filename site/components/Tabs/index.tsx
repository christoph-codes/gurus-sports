import { Box, Flex, Text } from "@chakra-ui/react";
// import NextLink from "next/link";
import Title from "../Title";
import styles from "./Tabs.module.scss";

export interface ITabsProps {
	className?: string;
	content: {
		category: string;
		items: {
			title: string;
			description?: string;
			price: string;
		}[];
	}[];
}

const Tabs = ({ content, className }: ITabsProps) => {
	return (
		<Box className={`${styles.Tabs} ${className || ""}`}>
			<Box>
				{content.map((item, index) => {
					return (
						<Box
							id={`${index}`}
							paddingX={0}
							key={index}
							paddingTop="32px"
						>
							<Title textAlign="center" h3 marginBottom="32px">
								{item.category}
							</Title>
							<Flex
								columnGap="48px"
								flexWrap="wrap"
								flexShrink={0}
							>
								{item.items.map((menuItem, idx) => {
									return (
										<Flex
											key={idx}
											justifyContent="space-between"
											alignItems="flex-start"
											width={{
												base: "100%",
												md: "calc(50% - 48px)",
											}}
											borderBottom="solid 1px"
											borderColor="brand.secondary.hover"
											marginBottom="24px"
											paddingX={0}
										>
											<Box>
												<Title h4 marginBottom="4px">
													{menuItem.title}
												</Title>
												<Text color="brand.secondary.light">
													{menuItem.description}
												</Text>
											</Box>
											<Text
												fontFamily="heading"
												fontSize="48px"
												lineHeight={1}
												textAlign="right"
											>
												${menuItem.price}
											</Text>
										</Flex>
									);
								})}
							</Flex>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Tabs;
