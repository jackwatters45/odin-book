import { FieldValues, Path, PathValue } from "react-hook-form";
import { RadioFormOption } from "../RadioForm";

interface UseRadioFormControllerProps<T extends FieldValues> {
	formField: string;
	options: RadioFormOption[];
	initial: PathValue<T, Path<T>> & string;
}

const useRadioFormController = <T extends FieldValues>({
	formField,
	options,
	initial,
}: UseRadioFormControllerProps<T>) => {
	const selectedOptionIcon = options.find(({ title }) => {
		return title === initial[formField];
	})?.icon;
	return {
		selectedOptionIcon,
	};
};

export default useRadioFormController;
