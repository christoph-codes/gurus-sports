import Button from "@/components/Button";
import Form from "@/components/Form";
import HighlightCards from "@/components/HighlightCards";
import NavLink from "@/components/NavLink";
import PageHeader from "@/components/PageHeader";
import Title from "@/components/Title";
import PageTemplate from "@/templates/Page";
import { facebookLink, instagramLink } from "@/utils/navLinks";
import { Box, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
	const [successfulSubmission, setSuccessfulSubmission] =
		useState<boolean>(false);
	return (
		<PageTemplate
			metaTitle="Contact » Guru's Sports Bar & Grill"
			metaDescription="Contact us today to get in touch with someone from our team or check us out on all of our social media accounts"
		>
			<PageHeader
				title="Contact"
				description="Contact us today to get in touch with someone from our team or check us out on all of our social media accounts"
			/>
			<Flex
				gap="24px"
				flexDir="column"
				justifyContent="space-between"
				marginBottom="48px"
				maxWidth={{ base: "100%", md: "70%" }}
				marginX="auto"
			>
				<Box>
					<Image
						src="/contact.png"
						alt="Guru's Sports Bar and Grill Exterior Shot"
						borderRadius={8}
						width="100%"
					/>
				</Box>
				<Box>
					{!successfulSubmission ? (
						<>
							<Flex>
								<NavLink href={instagramLink}>
									<Icon boxSize={8} as={GrInstagram} />
								</NavLink>
								<NavLink href={facebookLink}>
									<Icon boxSize={8} as={FaFacebook} />
								</NavLink>
							</Flex>

							<Text marginBottom="24px">
								Have questions or want to provide feedback? Fill
								out all of the fields below and we will get in
								touch with you as soon as possible.
							</Text>

							<Form
								formName="contact"
								submitButton={{ children: "submit" }}
								onSubmit={() => setSuccessfulSubmission(true)}
								inputs={[
									{
										type: "text",
										name: "fname",
										placeholder: "John",
										label: "First Name",
										required: true, //@ts-ignore
										validation: ["REQUIRED"],
									},
									{
										type: "text",
										name: "lname",
										placeholder: "Doe",
										label: "Last Name",
										required: true, //@ts-ignore
										validation: ["REQUIRED"],
									},
									{
										type: "email",
										name: "email",
										placeholder: "john@doe.com",
										label: "Email",
										required: true, //@ts-ignore
										validation: ["REQUIRED", "EMAIL"],
									},
									{
										type: "textarea",
										name: "message",
										placeholder:
											"Let us know how we are doing!",
										label: "Message",
										required: true, //@ts-ignore
										validation: ["REQUIRED"],
									},
								]}
							/>
						</>
					) : (
						<>
							<Title
								h3
								textAlign="center"
								color="brand.primary.default"
							>
								Thank you for Contacting Us!
							</Title>
							<Text textAlign="center" marginBottom="32px">
								Someone from our team will be reaching out to
								you soon!
							</Text>
							<Flex justifyContent="center">
								<Button href="/menu">Check out our menu</Button>
							</Flex>
						</>
					)}
				</Box>
			</Flex>
			<HighlightCards />
		</PageTemplate>
	);
};

export default Contact;
