import { useLocation, useNavigate } from "react-router";

import useFormCustom, { DataMapper } from "@/hooks/useFormCustom";
import { IUser } from "@/types/IUser";

interface ResetPasswordProps {
	userId: string;
}

const useResetPasswordMethod = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const data = location.state?.data;
	const user = data?.user as Partial<IUser>;

	const onSubmit = (data: ResetPasswordProps): ResetPasswordProps | void => {
		if (data.userId === "password")
			return navigate("/login", { state: { userId: user._id } });

		return data;
	};

	const dataMapper: DataMapper<ResetPasswordProps> = (data) => ({ data });

	const { register, submitForm, errors, formError } = useFormCustom<ResetPasswordProps>({
		dataMapper,
		onSubmit,
		mutateOptions: {
			queryUrl: "auth/forgot-password",
			queryKey: ["forgotPassword"],
			updateDataKey: "userId",
			method: "POST",
			successNavigate: "/recover/code",
		},
	});

	return {
		user,
		formError,
		register,
		submitForm,
		errors,
	};
};

export default useResetPasswordMethod;
