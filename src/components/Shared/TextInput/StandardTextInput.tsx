import { FieldValues, UseFormRegister } from "react-hook-form";

import {
	StyledAboutOverviewInput,
	StyledAboutOverviewInputDiv,
	StyledAboutOverviewInputLabel,
} from "../../User/Shared/UserForm/UserForm.styles";
import { InputHTMLAttributes } from "react";
import useStandardTextInput from "./useStandardTextInput";

interface StandardTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	category: string;
	isSelectedValue: boolean | undefined;
	register: ReturnType<UseFormRegister<FieldValues>> | undefined;
	labelText: string;
	className?: string;
}

const StandardTextInput = ({
	category,
	isSelectedValue,
	register,
	labelText,
	className,
	autoComplete,
	...props
}: StandardTextInputProps) => {
	const { ref, isAutofilled } = useStandardTextInput();

	return (
		<StyledAboutOverviewInputDiv className={className} ref={ref}>
			<StyledAboutOverviewInput
				type="text"
				id={category}
				className={isAutofilled || isSelectedValue ? "content" : "placeholder"}
				autoComplete={autoComplete}
				{...props}
				{...register}
			/>
			<StyledAboutOverviewInputLabel htmlFor={category}>
				{labelText}
			</StyledAboutOverviewInputLabel>
		</StyledAboutOverviewInputDiv>
	);
};

export default StandardTextInput;
