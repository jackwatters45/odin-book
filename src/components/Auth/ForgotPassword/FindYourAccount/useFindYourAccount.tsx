import { SubmitHandler } from "react-hook-form";
import useMutateForm from "../../../../hooks/useMutationForm";
import useFormCustom from "../../../../hooks/useFormCustom";

interface FindYourAccountInputs {
	username: string;
}

const useFindYourAccount = () => {
	const { mutate, formServerError } = useMutateForm<FindYourAccountInputs>({
		queryUrl: "auth/find-account",
		method: "POST",
		successNavigate: "/recover/method",
	});

	const onSubmit: SubmitHandler<FindYourAccountInputs> = (data) => mutate({ data });

	const { register, submitForm, errors } = useFormCustom<FindYourAccountInputs>({
		onSubmit,
	});

	return {
		formServerError,
		register,
		submitForm,
		errors,
	};
};

export default useFindYourAccount;
