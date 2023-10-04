import { HTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import {
	StyledAboutOverviewInputDiv,
	StyledAboutOverviewInputLabel,
	StyledAboutOverviewTextarea,
} from "../../User/Shared/UserForm/UserForm.styles";
import useAboutOverviewTextArea from "./useAboutOverviewTextArea";

interface AboutOverviewTextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
	category: string;
	isSelectedValue: boolean | undefined;
	register: ReturnType<UseFormRegister<FieldValues>>;
	labelText: string;
}

const AboutOverviewTextArea = ({
	category,
	isSelectedValue,
	register,
	labelText,
	...props
}: AboutOverviewTextAreaProps) => {
	const { textareaRef, handleInput } = useAboutOverviewTextArea();

	return (
		<StyledAboutOverviewInputDiv>
			<StyledAboutOverviewTextarea
				id={category}
				onInput={handleInput}
				className={isSelectedValue ? "content" : "placeholder"}
				{...register}
				ref={(e) => {
					register.ref(e);
					textareaRef.current = e;
				}}
				{...props}
			/>
			<StyledAboutOverviewInputLabel htmlFor={category}>
				{labelText}
			</StyledAboutOverviewInputLabel>
		</StyledAboutOverviewInputDiv>
	);
};

export default AboutOverviewTextArea;
