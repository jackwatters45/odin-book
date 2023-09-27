import { FieldValues, UseFormRegister } from "react-hook-form";

import {
	StyledAboutOverviewInput,
	StyledAboutOverviewInputDiv,
	StyledAboutOverviewInputLabel,
} from "../../../User/UserProfile/Pages/UserAbout/Pages/UserAboutOverview/UserAboutOverviewItems/UserAboutOverviewItem/StandardUserOverviewForm/StandardUserOverviewForm.styles";

interface AboutOverviewTextInputProps {
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
}: AboutOverviewTextInputProps) => {
	return (
		<StyledAboutOverviewInputDiv>
			<StyledAboutOverviewInput
				type="text"
				id={category}
				className={isSelectedValue ? "content" : "placeholder"}
				{...register}
			/>
			<StyledAboutOverviewInputLabel htmlFor={category}>
				{labelText}
			</StyledAboutOverviewInputLabel>
		</StyledAboutOverviewInputDiv>
	);
};

export default AboutOverviewTextInput;
