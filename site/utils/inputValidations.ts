export enum EErrorMessages {
	'REQUIRED' = 'This field is required',
	'OVERFIVE' = 'Value must be over five characters',
	'EMAIL' = 'Please enter a valid email',
}
// All functions must either return true or the error message in which failed.
const inputValidations = {
	REQUIRED(value: any) {
		if (value === '') {
			return EErrorMessages.REQUIRED;
		} 
		return '';
	},
	OVERFIVE(value: any) {
		if (value?.length < 5) {
			return EErrorMessages.OVERFIVE;
		} 
		return '';
	},
	EMAIL(value: any) {
		const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
		if (!pattern.test(value)) {
			return EErrorMessages.EMAIL;
		} 
		return '';
	},
};

export default inputValidations;