import PageTemplate from "@/templates/Page";
import { useRouter } from "next/router";
import { positions } from "@/utils/positions";
import PageHeader from "@/components/PageHeader";
import Title from "@/components/Title";
import { Flex, Text } from "@chakra-ui/react";
import Button from "@/components/Button";
import styles from "./Position.module.scss";
import Form from "@/components/Form";

const Position = () => {
	const router = useRouter();
	const { position } = router.query;
	const job = positions.find((j) => j.slug === position);
	const submitApplication = () => {
		console.log("submitApplication");
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
				<Title h3 textAlign="center">
					Job Description
				</Title>
				<Text textAlign="center" marginBottom="32px">
					{job.longDescription}
				</Text>
				<Flex justifyContent="center">
					<Button href="#apply">Apply Now</Button>
				</Flex>
				{/** TODO: #25 ADD FORM HERE */}
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
							type: "file",
							name: "resume",
							placeholder: "john@doe.com",
							label: "Resume",
							required: true, //@ts-ignore
							validation: ["REQUIRED"],
						},
					]}
				/>
			</PageTemplate>
		);
	}
	return null;
};

export default Position;
