import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Container from "../Container";
import styles from "./PoweredBy.module.scss";

const PoweredBy = () => (
	<Flex
		className={styles.PoweredBy}
		bgColor="brand.secondary.default"
		justifyContent="center"
		alignItems="center"
		textAlign="center"
		paddingBottom={4}
	>
		<Container paddingTop={2}>
			<Text color="brand.secondary.light" marginBottom={0}>
				Site made with{" "}
				<Icon
					marginBottom="-3px"
					as={FaHeart}
					color="brand.white.default"
				/>{" "}
				by{" "}
				<Text
					whiteSpace="nowrap"
					as={Link}
					fontSize="md"
					color="brand.white.default"
					target="_blank"
					href="https://thekirkconcept.com?campaign=Gurus"
					margin={0}
				>
					The Kirk Concept
				</Text>
			</Text>
		</Container>
	</Flex>
);

export default PoweredBy;
