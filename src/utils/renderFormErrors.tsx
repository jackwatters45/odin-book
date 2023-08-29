import { FormError } from "../../types/ErrorInterfaces";

const renderFormErrors = (formError: FormError) => {
	return Array.isArray(formError)
		? formError.map((error) => <div key={error.msg}>{error.msg}</div>)
		: formError;
};

export default renderFormErrors;
