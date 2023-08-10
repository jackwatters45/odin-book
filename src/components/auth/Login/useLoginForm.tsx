import { SubmitHandler } from "react-hook-form";
import useFormCustom from "../../../hooks/useFormCustom";
import useMutateCustom from "../../../hooks/useMutationCustom";

interface LoginInputs {
	username: string;
	password: string;
}

const useLoginForm = () => {
	const { mutate, formServerError } = useMutateCustom<LoginInputs>({
		queryKey: "user",
		queryUrl: "auth/login",
		method: "POST",
	});

	const onSubmit: SubmitHandler<LoginInputs> = (data) => mutate(data);

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

export default useLoginForm;
