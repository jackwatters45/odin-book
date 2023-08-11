import { SubmitHandler } from "react-hook-form";

import useMutateCustom from "../../../hooks/useMutationCustom";
import useFormCustom from "../../../hooks/useFormCustom";

interface CreateAccountBase {
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	gender: string;
	pronouns?: string;
}

export interface CreateAccountInputs extends CreateAccountBase {
	month: number;
	day: number;
	year: number;
	genderCustom?: string;
}

interface CreateAccountUserFields extends CreateAccountBase {
	birthday: Date;
}

const useCreateAccountForm = () => {
	const { mutate, formServerError, setFormServerError } =
		useMutateCustom<CreateAccountUserFields>({
			queryKey: "user",
			queryUrl: "auth/signup",
			method: "POST",
		});

	const onSubmit: SubmitHandler<CreateAccountInputs> = (data) => {
		const { genderCustom, day, month, year, pronouns, ...rest } = data;

		const birthday = new Date(year, month, day);
		if (isNaN(birthday.getTime())) {
			setFormServerError("Invalid birthday");
		}

		const userWithBirthday = { ...rest, birthday };

		if (data.gender !== "custom" || !data.genderCustom) return mutate(userWithBirthday);
		mutate({
			...userWithBirthday,
			gender: genderCustom || "custom",
			pronouns: pronouns || undefined,
		});
	};

	const { register, submitForm, errors, watch } = useFormCustom<CreateAccountInputs>({
		onSubmit,
		options: {
			mode: "onBlur",
		},
	});

	const selectedGenderOption = watch("gender");
	const selectedYear = watch("year", new Date().getFullYear());
	const selectedMonth = watch("month", new Date().getMonth() + 1);

	return {
		formServerError,
		register,
		submitForm,
		errors,
		selectedGenderOption,
		selectedYear,
		selectedMonth,
	};
};

export default useCreateAccountForm;
