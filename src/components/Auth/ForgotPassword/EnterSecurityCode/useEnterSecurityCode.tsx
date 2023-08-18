import { SubmitHandler } from "react-hook-form";
import useFormCustom from "../../../../hooks/useFormCustom";
import useMutateForm from "../../../../hooks/useMutationForm";
import { useLocation } from "react-router";

interface SecurityCodeInputs {
	code: string;
}

const useEnterSecurityCode = () => {
	const location = useLocation();
	const data = location.state?.data;
	const recoverValue = data?.userId;

	const { mutate, formServerError } = useMutateForm<SecurityCodeInputs>({
		queryUrl: "auth/reset-password/code",
		method: "GET",
		successNavigate: "/recover/password",
	});

	const onSubmit: SubmitHandler<SecurityCodeInputs> = (data) => {
		mutate({ params: data.code });
	};

	const { register, submitForm, errors } = useFormCustom<SecurityCodeInputs>({
		onSubmit,
	});

	return {
		formServerError,
		register,
		submitForm,
		errors,
		recoverValue,
	};
};

export default useEnterSecurityCode;
