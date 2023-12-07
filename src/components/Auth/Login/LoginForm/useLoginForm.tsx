import useFormCustom, { DataMapper } from "@/hooks/reactQuery/useFormCustom";

export interface LoginFormInputs {
	username: string;
	password: string;
}

const useLoginForm = () => {
	const dataMapper: DataMapper<LoginFormInputs> = (data) => ({ data });

	const { register, submitForm, errors, formError, watch } =
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
