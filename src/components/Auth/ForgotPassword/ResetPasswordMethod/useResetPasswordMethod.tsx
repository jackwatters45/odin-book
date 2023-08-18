import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

import useMutateForm from "../../../../hooks/useMutationForm";
import useFormCustom from "../../../../hooks/useFormCustom";
import { IUser } from "../../../../../types/IUser";

interface ResetPasswordProps {
	userId: string;
}

const useResetPasswordMethod = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const data = location.state?.data;
	const user = data?.user as Partial<IUser>;

	const { mutate, formServerError } = useMutateForm<ResetPasswordProps>({
		queryUrl: "auth/forgot-password",
		method: "POST",
		successNavigate: "/recover/code",
	});

	const onSubmit: SubmitHandler<ResetPasswordProps> = (data) => {
		if (data.userId === "password")
			return navigate("/login", { state: { userId: user._id } });
		mutate({ data: { ...data } });
	};

	const { register, submitForm, errors } = useFormCustom<ResetPasswordProps>({
		onSubmit,
	});

	return {
		user,
		formServerError,
		register,
		submitForm,
		errors,
	};
};

export default useResetPasswordMethod;
