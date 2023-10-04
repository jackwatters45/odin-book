import { FormError } from "../../types/ErrorInterfaces";

const renderFormErrors = (formError: FormError) => {
	return Array.isArray(formError)
		? formError.map((error) => <span key={error.msg}>{error.msg}</span>)
		: formError;
};

export default renderFormErrors;
