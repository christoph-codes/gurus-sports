import PageTemplate from "@/templates/Page";
import { useRouter } from "next/router";
import { positions } from "@/utils/positions";
import PageHeader from "@/components/PageHeader";
import Title from "@/components/Title";
import { Box, Flex, Text } from "@chakra-ui/react";
import Button from "@/components/Button";
import styles from "./Position.module.scss";
import Form from "@/components/Form";
import { useState } from "react";

const Position = () => {
	const router = useRouter();
	const { position } = router.query;
	const job = positions.find((j) => j.slug === position);
	const [successfulSubmission, setSuccessfulSubmission] =
		useState<boolean>(false);
	const submitApplication = () => {
		setSuccessfulSubmission(true);
	};
	if (job) {
		return (
			<PageTemplate
				metaTitle={`${job.title} » Career Opportunities with Guru's Sports Bar & Grill`}
				metaDescription={job.shortDescription}
				className={styles.Position}
			>
				<PageHeader
					title={job.title}
					description={job.shortDescription}
				/>
				<Box
					marginX="auto"
					maxWidth={{ base: "100%", md: "70%" }}
					marginBottom="32px"
				>
					<Title h3 textAlign="center">
						Job Description
					</Title>
					<Text textAlign="center" marginBottom="32px">
						{job.longDescription}
					</Text>
					{!successfulSubmission ? (
						<Form
							formName={`position-apply-${job.title}`}
							onSubmit={submitApplication}
							submitButton={{ children: "Apply Now" }}
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
									type: "tel",
									name: "phone",
									placeholder: "7021234567",
									label: "Phone Number",
									required: true, //@ts-ignore
									validation: ["REQUIRED"],
								},
								{
									type: "textarea",
									name: "resume",
									placeholder: "Please paste your resume",
									label: "Paste Resume", //@ts-ignore
									validation: ["REQUIRED"],
								},
							]}
						/>
					) : (
						<>
							<Title
								h3
								textAlign="center"
								color="brand.primary.default"
							>
								Thank you for Applying!
							</Title>
							<Text textAlign="center" marginBottom="32px">
								If you fit what we are looking for in a{" "}
								{job.title} someone from our team will be
								reaching out to you soon!
							</Text>
							<Flex justifyContent="center">
								<Button href="/menu">Check out our menu</Button>
							</Flex>
						</>
					)}
				</Box>
			</PageTemplate>
		);
	}
	return null;
};

export default Position;
