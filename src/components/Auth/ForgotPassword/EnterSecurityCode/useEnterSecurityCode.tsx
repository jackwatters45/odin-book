import useFormCustom from "../../../../hooks/useFormCustom";
import { useLocation } from "react-router";

interface SecurityCodeInputs {
	code: string;
}

const useEnterSecurityCode = () => {
	const location = useLocation();
	const data = location.state?.data;
	const recoverValue = data?.userId;

	const dataMapper = (data: SecurityCodeInputs) => ({ params: data.code });

	const { register, submitForm, errors, formError } = useFormCustom<SecurityCodeInputs>({
		dataMapper,
		mutateOptions: {
			queryUrl: "auth/reset-password/code",
			method: "GET",
			successNavigate: "/recover/password",
		},
	});

	return {
		formError,
		register,
		submitForm,
		errors,
		recoverValue,
	};
};

export default useEnterSecurityCode;
