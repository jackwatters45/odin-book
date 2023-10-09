import useFormCustom, { DataMapper } from "../../../hooks/useFormCustom";

export interface CreateAccountInputs {
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	gender: string;
	pronouns?: string;
	month?: string;
	day?: string;
	year?: string;
	genderCustom?: string;
	birthday?: Date;
}

const useCreateAccountForm = () => {
	const onSubmit = (data: CreateAccountInputs): CreateAccountInputs | string => {
		const { genderCustom, day, month, year, pronouns, ...rest } = data;

		if (!day || !month || !year) return "Invalid birthday";
		const birthday = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
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
				queryKey: ["currentUser"],
				updateDataKey: "user",
				queryUrl: "auth/signup",
				method: "POST",
				successNavigate: "/",
			},
		});

	const formValues = watch();

	const selectedGenderOption = watch("gender");

	return {
		formValues,
		formError,
		register,
		submitForm,
		errors,
		selectedGenderOption,
	};
};

export default useCreateAccountForm;
