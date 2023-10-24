import { UseFormSetValue, useForm } from "react-hook-form";
import { CheckInValues } from "../types/CheckInTypes";
import { PostFormValues } from "../../../types/PostFormTypes";

interface CheckInFormValues {
	location: string;
	city: string;
	state: string;
	country: string;
}

interface UseCreatePostCheckInformProps {
	closeForm: () => void;
	setValue: UseFormSetValue<PostFormValues>;
	currentValue: CheckInValues | undefined;
}

const useCreatePostCheckInForm = ({
	setValue,
	closeForm,
	currentValue,
}: UseCreatePostCheckInformProps) => {
	const { register, watch, reset } = useForm<CheckInFormValues>({
		mode: "onSubmit",
		shouldFocusError: false,
		defaultValues: currentValue || {},
	});

	const formValues = watch();

	const handleConfirm = () => {
		setValue("checkIn", formValues);

		reset();
		closeForm();
	};

	return {
		register,
		formValues,
		handleConfirm,
	};
};

export default useCreatePostCheckInForm;
