import PageTemplate from "@/templates/Page";
import { useRouter } from "next/router";
import { positions } from "@/utils/positions";
import PageHeader from "@/components/PageHeader";
import Title from "@/components/Title";
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
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
				<PageHeader title={job.title} />

				<Box
					marginX="auto"
					maxWidth={{ base: "100%", md: "70%" }}
					marginBottom="32px"
				>
					<Button
						href="/careers"
						variant="white-outline"
						className={styles.Position__back}
					>
						« Back to Careers
					</Button>
					<Title h4>Job Overview</Title>
					<Text>{job.shortDescription}</Text>
					{job.pay && (
						<>
							<Title h4>Compensation</Title>
							<Text>{job.pay}</Text>
						</>
					)}
					<Title h4>Responsibilities</Title>
					<UnorderedList>
						{job.responsibilities.map((resp, index) => {
							return <ListItem key={index}>{resp}</ListItem>;
						})}
					</UnorderedList>
					<Title h4>Requirements</Title>
					<UnorderedList>
						{job.requirements.map((resp, index) => {
							return <ListItem key={index}>{resp}</ListItem>;
						})}
					</UnorderedList>
					<Text>{job.closing}</Text>
					<Text>
						{`Apply today and become a part of the Guru's Sports Grill
						& Bar team!`}
					</Text>
					{!successfulSubmission ? (
						<Form
							formName={job.title}
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
						<Box
							padding="48px"
							borderRadius={8}
							backgroundColor="brand.black.hover"
						>
							<Title
								h3
								textAlign="center"
								color="brand.primary.default"
							>
								Thank you for Applying!
							</Title>
							<Text textAlign="center">
								If you fit what we are looking for in a{" "}
								{job.title}, someone from our team will be
								reaching out to you soon!
							</Text>
							<Flex justifyContent="center">
								<Button variant="white-outline" href="/careers">
									Back to Careers
								</Button>
							</Flex>
						</Box>
					)}
				</Box>
			</PageTemplate>
		);
	}
	return null;
};

export default Position;
