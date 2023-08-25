import useFormCustom, { DataMapper } from "../../../hooks/useFormCustom";

interface CreateAccountInputs {
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	gender: string;
	pronouns?: string;
	month?: number;
	day?: number;
	year?: number;
	genderCustom?: string;
	birthday?: Date;
}

const useCreateAccountForm = () => {
	const onSubmit = (data: CreateAccountInputs): CreateAccountInputs | string => {
		const { genderCustom, day, month, year, pronouns, ...rest } = data;

		if (!day || !month || !year) return "Invalid birthday";
		const birthday = new Date(year, month, day);
		if (isNaN(birthday.getTime())) return "Invalid birthday";

		const userWithBirthday = { ...rest, birthday };

		if (data.gender !== "custom" || !data.genderCustom) {
			return userWithBirthday;
		}

		return {
			...userWithBirthday,
			gender: genderCustom || "custom",
			pronouns: pronouns || undefined,
		};
	};

	const dataMapper: DataMapper<CreateAccountInputs> = (data) => ({ data });

	const { register, submitForm, errors, watch, formError } =
		useFormCustom<CreateAccountInputs>({
			dataMapper,
			onSubmit,
			formOptions: {
				mode: "onBlur",
			},
			mutateOptions: {
				queryKey: "currentUser",
				queryUrl: "auth/signup",
				method: "POST",
			},
		});

	const selectedGenderOption = watch("gender");
	const selectedYear = watch("year", new Date().getFullYear());
	const selectedMonth = watch("month", new Date().getMonth() + 1);

	return {
		formError,
		register,
		submitForm,
		errors,
		selectedGenderOption,
		selectedYear,
		selectedMonth,
	};
};

export default useCreateAccountForm;
