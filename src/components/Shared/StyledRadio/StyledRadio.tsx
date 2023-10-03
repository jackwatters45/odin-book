import { FieldValues, PathValue, Path, UseFormRegister } from "react-hook-form";
import { HTMLAttributes } from "react";

import {
	StyledRadioContainer,
	StyledRadioInput,
	StyledRadioSpan,
} from "./StyledRadio.styles";

interface StyledRadioProps<T extends FieldValues>
	extends HTMLAttributes<HTMLInputElement> {
	radioValue: string;
	id: string;
	selectedValue: PathValue<T, Path<T>>;
	onChange?: () => void;
	register?: ReturnType<UseFormRegister<FieldValues>>;
	size?: number;
}

const StyledRadio = <T extends FieldValues>({
	radioValue,
	id,
	selectedValue,
	onChange,
	register,
	size = 1.25,
	...props
}: StyledRadioProps<T>) => {
	return (
		<StyledRadioContainer size={size}>
			<StyledRadioInput
				type="radio"
				id={id}
				name={id}
				value={radioValue}
				checked={selectedValue === radioValue}
				onChange={onChange}
				{...register}
				{...props}
			/>
			<StyledRadioSpan />
		</StyledRadioContainer>
	);
};

export default StyledRadio;
