import { Control, Controller, FieldValues, Path, PathValue } from "react-hook-form";

import ButtonRadioForm from "../ButtonRadioForm";
import { RadioFormOption } from "../RadioForm";
import useRadioFormController from "./useRadioFormController";

interface RadioFormControllerProps<T extends FieldValues> {
	formField: Path<T> & string;
	control: Control<T>;
	openDialog: () => void;
	options: RadioFormOption[];
	initial: PathValue<T, Path<T>> & string;
}

const RadioFormController = <T extends FieldValues>({
	formField,
	control,
	openDialog,
	options,
	initial,
}: RadioFormControllerProps<T>) => {
	const { selectedOptionIcon } = useRadioFormController({ options, initial, formField });

	return (
		<Controller
			name={formField}
			control={control}
			render={({ field }) => {
				return (
					<ButtonRadioForm
						value={field.value[formField]}
						onClick={openDialog}
						icon={selectedOptionIcon}
					/>
				);
			}}
		/>
	);
};

export default RadioFormController;
