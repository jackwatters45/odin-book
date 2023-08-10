import { ValidationError } from "../hooks/useMutationCustom";

const renderFormErrors = (formServerError: string | ValidationError[]) => {
	return Array.isArray(formServerError)
		? formServerError.map((error) => <div key={error.msg}>{error.msg}</div>)
		: formServerError;
};

export default renderFormErrors;