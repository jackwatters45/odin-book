import { FieldValues, UseFormRegister } from "react-hook-form";
import { HTMLAttributes } from "react";

import {
	StyledCheckboxLabel,
	StyledCheckboxLabelText,
	StyledCheckboxSpan,
} from "./StandardCheckbox.styles";

interface StandardCheckboxProps extends HTMLAttributes<HTMLLabelElement> {
	id: string;
	register: ReturnType<UseFormRegister<FieldValues>>;
	labelText?: string;
}

const StandardCheckbox = ({
	id,
	register,
	labelText,
	...props
}: StandardCheckboxProps) => {
	return (
		<StyledCheckboxLabel {...props}>
			<input type="checkbox" id={id} {...register} hidden />
			<StyledCheckboxSpan className="checkbox" />
			{labelText && (
				<StyledCheckboxLabelText className="labelText">
					{labelText}
				</StyledCheckboxLabelText>
			)}
		</StyledCheckboxLabel>
	);
};

export default StandardCheckbox;
