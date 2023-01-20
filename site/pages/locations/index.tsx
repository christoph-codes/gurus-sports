import { Box, Flex, Text } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader";
import PageTemplate from "@/templates/Page";
import Title from "@/components/Title";
import styles from "./Locations.module.scss";
import { toastTabLink } from "@/utils/navLinks";
import Button from "@/components/Button";
import { Fragment } from "react";
import { locationDetails } from "@/utils/locations";
import HighlightCards from "@/components/HighlightCards";

const Locations = () => {
	return (
		<PageTemplate
			metaTitle="Locations » Guru's Sports Bar & Grill"
			metaDescription="Guru's Sports Bar & Grill Locations located in Utah"
		>
			<PageHeader
				title="Locations"
				description="View our different locations where you can experience the Guru's way of sports and dining."
			/>
			{locationDetails.map((loc, index) => {
				return (
					<Box
						key={index}
						marginBottom="32px"
						className={styles.Locations}
						borderBottom="solid 1px"
						borderBottomColor="brand.secondary.hover"
						paddingBottom="48px"
					>
						<Title h3 marginBottom={{ base: "16px", md: "8px" }}>
							{loc.new && <span>NEW!</span>}
							{loc.title}
						</Title>
						<Flex flexDir={{ base: "column", md: "row" }}>
							<Box
								as="iframe"
								src={loc.googleMap}
								width="100%"
								flexBasis="40%"
								height="273"
								borderLeft={loc.new ? "8px solid" : "0"}
								borderLeftColor="brand.primary.default"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								marginBottom={{ base: "16px", md: 0 }}
							/>
							<Flex
								flexBasis="60%"
								paddingX={{ base: "0", md: "32px" }}
								gap="24px"
								flexDir={{ base: "column", md: "row" }}
							>
								<Box flexBasis="60%">
									<Text fontWeight="bold">
										Address:
										<br />
										{loc.address1}
										{loc.address2 && (
											<>
												<br />
												{loc.address2}
											</>
										)}
										<br />
										{loc.cityStateZip}
									</Text>
									{loc.notes && <Text>{loc.notes}</Text>}
								</Box>
								<Box flexBasis="40%">
									<Text fontWeight="bold">
										Hours:
										<br />
										{loc.hours.map((day, idx) => {
											return (
												<Fragment key={idx}>
													{day}
													<br />
												</Fragment>
											);
										})}
									</Text>
									<Text fontWeight="bold">
										Phone:
										<br />
										{loc.phone}
									</Text>
								</Box>
							</Flex>
						</Flex>
					</Box>
				);
			})}
			<Flex justifyContent="center" marginBottom="32px">
				<Button href={toastTabLink} target="_blank">
					Order Now
				</Button>
			</Flex>
			<HighlightCards />
		</PageTemplate>
	);
};

export default Locations;
