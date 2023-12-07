import { useLocation, useNavigate } from "react-router";

import useFormCustom, { DataMapper } from "@/hooks/reactQuery/useFormCustom";
import { IUser } from "@/types/IUser";

export interface ResetPasswordProps {
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

	const { register, submitForm, errors, formError, watch } =
		useFormCustom<ResetPasswordProps>({
			dataMapper,
			onSubmit,
			mutateOptions: {
				queryUrl: "auth/forgot-password",
				method: "POST",
				successNavigate: "/recover/code",
			},
			formOptions: {
				defaultValues: { userId: user.email || user.phoneNumber || "password" },
			},
		});

	const selectedValue = watch("userId");

	return {
		user,
		formError,
		register,
		submitForm,
		errors,
		selectedValue,
	};
};

export default useResetPasswordMethod;
