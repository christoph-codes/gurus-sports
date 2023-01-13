import { Flex, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import { navigationLinks, utilityLinks } from "../../utils/navLinks";
import Container from "../Container";

const Footer = () => (
	<Flex
		as="footer"
		bgColor="brand.black.default"
		paddingY={{ base: 3, md: 6 }}
	>
		<Flex as={Container} justifyContent="space-between">
			<Box display={{ base: "none", md: "block" }}>
				<Flex
					as="ul"
					borderBottomStyle="solid"
					borderBottomWidth="1px"
					borderBottomColor="brand.black.hover"
					listStyleType="none"
					alignItems="center"
				>
					{navigationLinks.map((item, index) => (
						<Text
							as={Link}
							key={index}
							href={item.link.path}
							marginRight={4}
							marginBottom={4}
							color="brand.white.default"
							_hover={{ color: "brand.white.hover" }}
						>
							{item.link.label}
						</Text>
					))}
				</Flex>
				<Flex
					as="ul"
					listStyleType="none"
					alignItems="center"
					marginTop={4}
				>
					{utilityLinks.map((item, index) => (
						<Text
							as={Link}
							key={index}
							href={item.link.path}
							marginRight={4}
							color="brand.black.hover"
							_hover={{ color: "brand.white.hover" }}
						>
							{item.link.label}
						</Text>
					))}
					<Text as="span" marginRight={4} color="brand.black.hover">
						{`Copyright © 2022. Guru's Sports Bar & Grill. All Rights
						Reserved.`}
					</Text>
				</Flex>
			</Box>
			<Image
				src="/logo.svg"
				alt="Guru's Sports Bar & Grill Icon"
				width={{ base: "30px", md: "auto" }}
				margin={{ base: "0 auto", md: "0" }}
			/>
		</Flex>
	</Flex>
);

export default Footer;
