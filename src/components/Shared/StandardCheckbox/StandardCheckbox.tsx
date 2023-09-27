import { FieldValues, UseFormRegister } from "react-hook-form";
import {
	StyledCheckboxLabel,
	StyledCheckboxLabelText,
	StyledCheckboxSpan,
} from "./StandardCheckbox.styles";

interface StandardCheckboxProps {
	id: string;
	register: ReturnType<UseFormRegister<FieldValues>>;
	labelText?: string;
	className?: string;
}

const StandardCheckbox = ({
	id,
	register,
	labelText,
	className,
}: StandardCheckboxProps) => {
	return (
		<StyledCheckboxLabel className={className}>
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
