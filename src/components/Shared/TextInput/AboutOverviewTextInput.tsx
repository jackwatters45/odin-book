import { FieldValues, UseFormRegister } from "react-hook-form";

import {
	StyledAboutOverviewInput,
	StyledAboutOverviewInputDiv,
	StyledAboutOverviewInputLabel,
} from "../../User/Shared/UserForm/UserForm.styles";
import { InputHTMLAttributes } from "react";

interface AboutOverviewTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	category: string;
	isSelectedValue: boolean | undefined;
	register: ReturnType<UseFormRegister<FieldValues>>;
	labelText: string;
}

const AboutOverviewTextInput = ({
	category,
	isSelectedValue,
	register,
	labelText,
	...props
}: AboutOverviewTextInputProps) => {
	return (
		<StyledAboutOverviewInputDiv>
			<StyledAboutOverviewInput
				type="text"
				id={category}
				className={isSelectedValue ? "content" : "placeholder"}
				{...register}
				{...props}
			/>
			<StyledAboutOverviewInputLabel htmlFor={category}>
				{labelText}
			</StyledAboutOverviewInputLabel>
		</StyledAboutOverviewInputDiv>
	);
};

export default AboutOverviewTextInput;
