import useFormCustom, { DataMapper } from "@/hooks/useFormCustom";

interface LoginFormInputs {
	username: string;
	password: string;
}

const useLoginForm = () => {
	const dataMapper: DataMapper<LoginFormInputs> = (data) => ({ data });

	const { register, submitForm, errors, formError, watch, setValue, control } =
		useFormCustom<LoginFormInputs>({
			dataMapper,
			mutateOptions: {
				queryKey: ["currentUser"],
				updateDataKey: "user",
				queryUrl: "auth/login",
				method: "POST",
				successNavigate: "/",
			},
		});

	const formValues = watch();

	return {
		formError,
		register,
		submitForm,
		errors,
		formValues,
	};
};

export default useLoginForm;
