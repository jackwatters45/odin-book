import { UseFormSetValue, useForm } from "react-hook-form";
import { CheckInValues } from "../types/CheckInTypes";
import { CreatePostFormValues } from "../../../types/CreatePostTypes";

interface CheckInFormValues {
	location: string;
	city: string;
	state: string;
	country: string;
}

interface UseCreatePostCheckInformProps {
	closeForm: () => void;
	setValue: UseFormSetValue<CreatePostFormValues>;
	currentValue: CheckInValues;
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
