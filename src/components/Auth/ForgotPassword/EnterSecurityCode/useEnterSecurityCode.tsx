import { useLocation } from "react-router";

import useFormCustom from "@/hooks/reactQuery/useFormCustom";

export interface SecurityCodeInputs {
	code: string;
}

const useEnterSecurityCode = () => {
	const location = useLocation();
	const data = location.state?.data;
	const recoverValue = data?.userId;

	const dataMapper = (data: SecurityCodeInputs) => ({ params: data.code });

	const { register, submitForm, errors, formError, watch } =
		useFormCustom<SecurityCodeInputs>({
			dataMapper,
			mutateOptions: {
				queryUrl: "auth/reset-password/code",
				method: "GET",
				successNavigate: "/recover/password",
			},
		});

	const formValues = watch();

	return {
		formError,
		register,
		submitForm,
		errors,
		recoverValue,
		formValues,
	};
};

export default useEnterSecurityCode;
