import { SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router";

import useMutateForm from "../../../../hooks/useMutationForm";
import useFormCustom from "../../../../hooks/useFormCustom";

interface FindYourAccountInputs {
	username: string;
}

const useFindYourAccount = () => {
	const location = useLocation();
	const data = location.state?.data;
	const linkError = data?.linkError || false;

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
		linkError,
	};
};

export default useFindYourAccount;
