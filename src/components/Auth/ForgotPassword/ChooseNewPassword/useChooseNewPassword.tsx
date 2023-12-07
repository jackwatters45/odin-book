import { useLocation } from "react-router";

import useFormCustom, { DataMapper } from "@/hooks/reactQuery/useFormCustom";
import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";

export interface ChooseNewPasswordInputs {
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

	const { register, submitForm, errors, formError, setFormError, watch } =
		useFormCustom<ChooseNewPasswordInputs>({
			dataMapper,
			mutateOptions: {
				queryUrl: "auth/update-password",
				method: "POST",
				queryKey: ["currentUser"],
				updateDataKey: "user",
				successNavigate: "/",
			},
		});

	const { mutate: mutateUser } = useMutateCustom({
		queryUrl: "auth/login/forgot-password",
		method: "POST",
		queryKey: ["currentUser"],
		updateDataKey: "user",
		onError: setFormError,
		successNavigate: "/",
	});

	const formValues = watch();

	const handleSkip = () => {
		if (!token) return setFormError("No token found");
		mutateUser({ data: { token } });
	};

	return {
		token,
		formError,
		register,
		submitForm,
		errors,
		formValues,
		handleSkip,
	};
};

export default useChooseNewPassword;
