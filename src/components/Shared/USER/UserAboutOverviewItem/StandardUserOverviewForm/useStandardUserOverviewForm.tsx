import { useParams } from "react-router";

import useFormCustom, { DataMapper, DataValidator } from "@/hooks/useFormCustom";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { UserAboutFormFields } from "./StandardUserOverviewForm";
import { FormEvent } from "react";
import { DeepPartial } from "react-hook-form";
import useError from "@/components/Errors/useError";

interface UseUserAboutFormProps<T> {
	handleCloseForm: () => void;
	audience: AudienceStatusOptions;
	initialValues: T | undefined;
	url: string;
	param?: string;
	method: "POST" | "PATCH";
	onSubmit?: DataValidator<UserAboutFormFields<T>>;
	validateSubmit?: (data: T | undefined) => { isValid: boolean; message: string };
}

const useUserOverviewForm = <T,>({
	handleCloseForm,
	audience,
	initialValues,
	url,
	param,
	method,
	onSubmit,
	validateSubmit,
}: UseUserAboutFormProps<T>) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const { setError } = useError();
	const defaultValues = {
		audience,
		values: initialValues,
	};

	const dataMapper: DataMapper<UserAboutFormFields<T>> = (data) => ({
		data: {
			audience: data.audience,
			values: data.values,
		},
	});

	const queryUrl = param ? `users/${userId}/${url}/${param}` : `users/${userId}/${url}`;

	const { submitForm, register, watch, control, setValue } = useFormCustom<
		UserAboutFormFields<T>
	>({
		dataMapper,
		onSubmit,
		mutateOptions: {
			queryUrl,
			method,
			queryKey: ["user", userId],
			updateDataKey: "user",
			onSuccessFn: handleCloseForm,
		},
		formOptions: {
			defaultValues: { audience, values: initialValues as DeepPartial<T> | undefined },
		},
	});

	const formValues = watch();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isChanged = JSON.stringify(formValues) !== JSON.stringify(defaultValues);

		if (validateSubmit) {
			const { isValid, message } = validateSubmit(formValues.values);
			if (!isValid) return setError(message);
		}

		if (isChanged) submitForm();
	};

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
	};
};

export default useUserOverviewForm;
