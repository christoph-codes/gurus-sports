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
