import { SubmitHandler } from "react-hook-form";
import useMutateForm from "../../../../hooks/useMutationForm";
import useFormCustom from "../../../../hooks/useFormCustom";

interface ForgotPasswordInputs {
	username: string;
}

const useForgotPasswordForm = () => {
	const { mutate, formServerError } = useMutateForm<ForgotPasswordInputs>({
		queryUrl: "auth/find-account",
		method: "POST",
		successNavigate: "/recover/method",
	});

	const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => mutate({ data });

	const { register, submitForm, errors } = useFormCustom<ForgotPasswordInputs>({
		onSubmit,
	});

	return {
		formServerError,
		register,
		submitForm,
		errors,
	};
};

export default useForgotPasswordForm;
