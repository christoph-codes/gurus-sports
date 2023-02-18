export enum EErrorMessages {
	"REQUIRED" = "This field is required",
	"OVERFIVE" = "Value must be over five characters",
	"EMAIL" = "Please enter a valid email",
	"PHONE" = "Please enter a valid phone number including area code",
}
// All functions must either return true or the error message in which failed.
const inputValidations = {
	REQUIRED(value: any) {
		if (value.trim() === "") {
			return EErrorMessages.REQUIRED;
		}
		return "";
	},
	OVERFIVE(value: any) {
		if (value?.length < 5) {
			return EErrorMessages.OVERFIVE;
		}
		return "";
	},
	EMAIL(value: any) {
		const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
		if (!pattern.test(value)) {
			return EErrorMessages.EMAIL;
		}
		return "";
	},
	PHONE(value: any) {
		if (value.length !== 10 || typeof value === 'number') {
			return EErrorMessages.PHONE;
		}
		return "";
	},
};

export default inputValidations;
