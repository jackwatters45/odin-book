import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { RadioFormOption } from "../RadioForm";
import useRadioFormController from "./useRadioFormController";
import { StyledRadioFormButton } from "./RadioFormController.styles";
import { StandardButtonProps } from "../../StandardButton/StandardButton";

interface RadioFormControllerProps<T extends FieldValues> {
	formField: Path<T> & string;
	control: Control<T>;
	openDialog: () => void;
	options?: RadioFormOption[];
	buttonOptions?: StandardButtonProps;
}

const RadioFormController = <T extends FieldValues>({
	formField,
	control,
	openDialog,
	options,
	buttonOptions,
}: RadioFormControllerProps<T>) => {
	const { getSelectedOptionIcon } = useRadioFormController({ options });

	return (
		<Controller
			name={formField}
			control={control}
			render={({ field }) => {
				const currentSelected = field.value?.[formField] || field.value;
				return (
					<StyledRadioFormButton
						text={currentSelected}
						icon={getSelectedOptionIcon(currentSelected)}
						onClick={openDialog}
						iconSize={0.7}
						iconColor={"#65676B"}
						{...buttonOptions}
					/>
				);
			}}
		/>
	);
};

export default RadioFormController;
