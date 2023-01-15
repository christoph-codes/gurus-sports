import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { navigationLinks } from "../../utils/navLinks";
import Container from "../Container";
import NavLink from "../NavLink";

const Footer = () => (
	<Flex
		as="footer"
		bgColor="brand.secondary.default"
		paddingTop={{ base: 3, md: 6 }}
		paddingBottom={{ base: 3, md: 3 }}
		paddingX={4}
	>
		<Container
			as={Container}
			justifyContent="center"
			bgColor="brand.secondary.hover"
			padding={{ base: 4, md: 8 }}
			marginBottom={8}
			borderRadius={8}
		>
			<Box>
				<Flex
					as="ul"
					listStyleType="none"
					alignItems="center"
					justifyContent="center"
					display={{ base: "none", md: "flex" }}
				>
					{navigationLinks.map((item, index) => (
						<Text
							as={NavLink}
							key={index}
							href={item.link.path}
							color="brand.white.default"
							_hover={{ color: "brand.white.hover" }}
						>
							{item.link.label}
						</Text>
					))}
				</Flex>
				<Text
					marginY={4}
					color="brand.secondary.light"
					textAlign="center"
				>
					{`Copyright © ${new Date().getFullYear()}. Guru's Sports Bar & Grill. All Rights
						Reserved.`}
				</Text>
			</Box>
			<Image
				src="/logo.svg"
				alt="Guru's Sports Bar & Grill Icon"
				width="64px"
				margin={{ base: "8px auto -44px", md: "8px auto -64px" }}
			/>
		</Container>
	</Flex>
);

export default Footer;
