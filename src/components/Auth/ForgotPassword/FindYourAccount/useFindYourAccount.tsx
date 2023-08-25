import { useLocation } from "react-router";

import useFormCustom from "../../../../hooks/useFormCustom";

interface FindYourAccountInputs {
	username: string;
}

const useFindYourAccount = () => {
	const location = useLocation();
	const data = location.state?.data;
	const linkError = data?.linkError || false;

	const dataMapper = (data: FindYourAccountInputs) => ({ data });

	const { register, submitForm, errors, formError } =
		useFormCustom<FindYourAccountInputs>({
			dataMapper,
			mutateOptions: {
				queryUrl: "auth/find-account",
				method: "POST",
				successNavigate: "/recover/method",
			},
		});

	return {
		formError,
		register,
		submitForm,
		errors,
		linkError,
	};
};

export default useFindYourAccount;
