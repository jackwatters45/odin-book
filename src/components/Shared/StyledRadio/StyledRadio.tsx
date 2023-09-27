import { FieldValues, PathValue, Path, UseFormRegister } from "react-hook-form";
import {
	StyledRadioContainer,
	StyledRadioInput,
	StyledRadioSpan,
} from "./StyledRadio.styles";

interface StyledRadioProps<T extends FieldValues> {
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
			/>
			<StyledRadioSpan />
		</StyledRadioContainer>
	);
};

export default StyledRadio;
