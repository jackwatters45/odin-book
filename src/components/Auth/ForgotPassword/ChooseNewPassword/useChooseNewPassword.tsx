import { SubmitHandler } from "react-hook-form";
import useFormCustom from "../../../../hooks/useFormCustom";
import useMutateForm from "../../../../hooks/useMutationForm";
import { useLocation } from "react-router";
import { useState } from "react";

interface ChooseNewPasswordInputs {
	newPassword: string;
}

const useChooseNewPassword = () => {
	const location = useLocation();
	const data = location.state?.data;
	const token = data?.token;

	const { mutate, formServerError, setFormServerError } =
		useMutateForm<ChooseNewPasswordInputs>({
			queryUrl: "auth/update-password",
			method: "POST",
		});

	const onSubmit: SubmitHandler<ChooseNewPasswordInputs> = (data) => {
		mutate({ data, params: token });
	};

	const { register, submitForm, errors } = useFormCustom<ChooseNewPasswordInputs>({
		onSubmit,
	});

	const { mutate: mutateUser } = useMutateForm({
		queryUrl: "auth/login/forgot-password",
		method: "POST",
		queryKey: "user",
		onError: setFormServerError,
	});

	const handleSkip = () => {
		if (!token) return setFormServerError("No token found");
		mutateUser({ data: { token } });
	};

	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword((prev) => !prev);

	return {
		token,
		formServerError,
		register,
		submitForm,
		errors,
		handleSkip,
		showPassword,
		toggleShowPassword,
	};
};

export default useChooseNewPassword;
