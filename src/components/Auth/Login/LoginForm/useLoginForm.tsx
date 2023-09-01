import useFormCustom, { DataMapper } from "@/hooks/useFormCustom";

interface LoginFormInputs {
	username: string;
	password: string;
}

const useLoginForm = () => {
	const dataMapper: DataMapper<LoginFormInputs> = (data) => ({ data });

	const { register, submitForm, errors, formError } = useFormCustom<LoginFormInputs>({
		dataMapper,
		mutateOptions: {
			queryKey: ["currentUser"],
			updateDataKey: "user",
			queryUrl: "auth/login",
			method: "POST",
			successNavigate: "/",
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
