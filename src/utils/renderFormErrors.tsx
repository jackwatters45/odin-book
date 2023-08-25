import { ValidationError } from "../../types/ErrorInterfaces";

const renderFormErrors = (formError: string | ValidationError[]) => {
	return Array.isArray(formError)
		? formError.map((error) => <div key={error.msg}>{error.msg}</div>)
		: formError;
};

export default renderFormErrors;
