import { useLocation } from "react-router";

import useFormCustom from "@/hooks/useFormCustom";

export interface FindYourAccountInputs {
	username: string;
}

const useFindYourAccount = () => {
	const location = useLocation();
	const data = location.state?.data;
	const linkError = data?.linkError || false;

	const dataMapper = (data: FindYourAccountInputs) => ({ data });

	const { register, submitForm, errors, formError, watch } =
		useFormCustom<FindYourAccountInputs>({
			dataMapper,
			mutateOptions: {
				queryUrl: "auth/find-account",
				method: "POST",
				successNavigate: "/recover/method",
			},
		});

	const formValues = watch();

	return {
		formError,
		register,
		submitForm,
		errors,
		linkError,
		formValues,
	};
};

export default useFindYourAccount;
