import { SubmitHandler } from "react-hook-form";

import useMutateForm from "../../../../hooks/useMutationForm";
import useFormCustom from "../../../../hooks/useFormCustom";
import { useLocation, useNavigate } from "react-router";
import { IUser } from "../../../../../types/IUser";

interface ResetPasswordProps {
	userId: string;
}

const useResetPasswordMethod = () => {
	const navigate = useNavigate();
	// gets user from previous page
	const location = useLocation();
	const data = location.state?.data;
	const user = (data?.user as Partial<IUser>) || false;

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
