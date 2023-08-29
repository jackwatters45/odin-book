import useFormCustom, { DataMapper } from "../../../../hooks/useFormCustom";
import useMutateCustom from "../../../../hooks/useMutateCustom";
import { useLocation } from "react-router";
import { useState } from "react";

interface ChooseNewPasswordInputs {
	newPassword: string;
}

const useChooseNewPassword = () => {
	const location = useLocation();
	const data = location.state?.data;
	const token = data?.token;

	const dataMapper: DataMapper<ChooseNewPasswordInputs> = (data) => ({
		data,
		params: token,
	});

	const { register, submitForm, errors, formError, setFormError } =
		useFormCustom<ChooseNewPasswordInputs>({
			dataMapper,
			mutateOptions: {
				queryUrl: "auth/update-password",
				method: "POST",
				queryKey: "currentUser",
				successNavigate: "/",
			},
		});

	const { mutate: mutateUser } = useMutateCustom({
		queryUrl: "auth/login/forgot-password",
		method: "POST",
		queryKey: "currentUser",
		onError: setFormError,
		successNavigate: "/",
	});

	const handleSkip = () => {
		if (!token) return setFormError("No token found");
		mutateUser({ data: { token } });
	};

	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword((prev) => !prev);

	return {
		token,
		formError,
		register,
		submitForm,
		errors,
		handleSkip,
		showPassword,
		toggleShowPassword,
	};
};

export default useChooseNewPassword;
