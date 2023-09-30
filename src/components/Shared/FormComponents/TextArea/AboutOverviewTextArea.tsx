import { FieldValues, UseFormRegister } from "react-hook-form";

import {
	StyledAboutOverviewInputDiv,
	StyledAboutOverviewInputLabel,
	StyledAboutOverviewTextarea,
} from "../../USER/UserAboutOverviewItem/StandardUserOverviewForm/StandardUserOverviewForm.styles";
import useAboutOverviewTextArea from "./useAboutOverviewTextArea";

interface AboutOverviewTextAreaProps {
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
			/>
			<StyledAboutOverviewInputLabel htmlFor={category}>
				{labelText}
			</StyledAboutOverviewInputLabel>
		</StyledAboutOverviewInputDiv>
	);
};

export default AboutOverviewTextArea;
