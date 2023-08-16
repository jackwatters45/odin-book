import { SubmitHandler } from "react-hook-form";
import useFormCustom from "../../../hooks/useFormCustom";
import useMutateForm from "../../../hooks/useMutationForm";

interface LoginInputs {
	username: string;
	password: string;
}

const useLogin = () => {
	const { mutate, formServerError } = useMutateForm<LoginInputs>({
		queryKey: "user",
		queryUrl: "auth/login",
		method: "POST",
	});

	const onSubmit: SubmitHandler<LoginInputs> = (data) => mutate({ data });

	const { register, submitForm, errors } = useFormCustom<LoginInputs>({
		onSubmit,
	});

	return {
		formServerError,
		register,
		submitForm,
		errors,
	};
};

export default useLogin;
