import useFormCustom, { DataMapper } from "../../../../hooks/useFormCustom";

interface LoginFormInputs {
	username: string;
	password: string;
}

const useLoginForm = () => {
	const dataMapper: DataMapper<LoginFormInputs> = (data) => ({ data });

	const { register, submitForm, errors, formError } = useFormCustom<LoginFormInputs>({
		dataMapper,
		mutateOptions: {
			queryKey: "currentUser",
			queryUrl: "auth/login",
			method: "POST",
		},
	});

	return {
		formError,
		register,
		submitForm,
		errors,
	};
};

export default useLoginForm;
