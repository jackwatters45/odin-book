import { SubmitHandler } from "react-hook-form";
import useFormCustom from "../../../../hooks/useFormCustom";
import useMutateForm from "../../../../hooks/useMutationForm";

interface LoginFormInputs {
	username: string;
	password: string;
}

const useLoginForm = () => {
	const { mutate, formServerError } = useMutateForm<LoginFormInputs>({
		queryKey: "user",
		queryUrl: "auth/login",
		method: "POST",
	});

	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => mutate({ data });

	const { register, submitForm, errors } = useFormCustom<LoginFormInputs>({
		onSubmit,
	});

	return {
		formServerError,
		register,
		submitForm,
		errors,
	};
};

export default useLoginForm;
