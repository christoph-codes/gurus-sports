import emailjs from '@emailjs/browser';

export const emailSubmit = (formData: {}): any => {
	emailjs
		.send(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
			formData,
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
		)
		.then((response) => response)
		.catch((err) => err);
};

export default emailSubmit;