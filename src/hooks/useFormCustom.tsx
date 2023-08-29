import { useState } from "react";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";

import { ValidationError } from "../../types/ErrorInterfaces";
import useMutateCustom, { MutationFnInputs, useMutateFormProps } from "./useMutateCustom";

/**
 * The Mapper function takers in data of type T and return it formatted as MutationFnInputs<T> for use in the mutate function
 */
export type DataMapper<T = undefined> = (data: T) => MutationFnInputs<T>;

/**
 * The Validator function takes in data of type T and returns a string or updated data of type T
 */
type DataValidator<T> = (data: T) => string | void | T;

/**
 * The formatData function takes in data of type T, a mapper function, a function to set the formError, and a validator function and returns the data formatted as MutationFnInputs<T> or sets the formError and returns void if the data is invalid
 */
export const formatData = <T,>(
	data: T,
	mapper: DataMapper<T>,
): MutationFnInputs<T> | void => mapper(data);

/**
 * The useFormCustomProps interface
 * @param dataMapper The mapper function to format the data
 * @param formOptions The options for the useForm hook
 * @param mutateOptions The options for the useMutateForm hook
 */

export type FormError = string | ValidationError[];
interface useFormCustomProps<T extends FieldValues> {
	dataMapper: DataMapper<T>;
	onSubmit?: DataValidator<T>;
	formOptions?: {
		mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | undefined;
		reValidateMode?: "onChange" | "onBlur" | "onSubmit";
		defaultValues?: DefaultValues<T> | undefined;
	};
	mutateOptions: useMutateFormProps;
}

const useFormCustom = <T extends FieldValues>({
	dataMapper,
	onSubmit,
	formOptions,
	mutateOptions,
}: useFormCustomProps<T>) => {
	const [formError, setFormError] = useState<string | ValidationError[]>("");

	const { mutate } = useMutateCustom<T>({ ...mutateOptions });

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<T>(formOptions);

	const submitForm = handleSubmit((data) => {
		const submitData = onSubmit ? onSubmit(data) : data;

		if (!submitData) return;

		if (typeof submitData === "string") return setFormError(submitData);

		mutate(dataMapper(submitData));
	});

	return { register, submitForm, errors, watch, formError, setFormError };
};

export default useFormCustom;
