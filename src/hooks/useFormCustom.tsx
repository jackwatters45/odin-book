import { DefaultValues, FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface useFormCustomProps<T extends FieldValues> {
	onSubmit: SubmitHandler<T>;
	options?: {
		mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | undefined;
		reValidateMode?: "onChange" | "onBlur" | "onSubmit";
		defaultValues?: DefaultValues<T> | undefined;
	};
}

const useFormCustom = <T extends FieldValues>({
	onSubmit,
	options,
}: useFormCustomProps<T>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<T>(options);

	const submitForm = handleSubmit(onSubmit);

	return { register, submitForm, errors, watch };
};

export default useFormCustom;
