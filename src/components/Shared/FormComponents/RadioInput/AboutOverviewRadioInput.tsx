import StyledRadio from "@/components/Shared/StyledRadio";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import {
	StyledLabelText,
	StyledRadioFormLabel,
	StyledRadioInputsContainer,
} from "./AboutOverviewRadioInput.styles";

type OptionsFormValues = { title: string; value: string };

interface AboutOverviewRadioInputProps {
	formField: Path<FieldValues>;
	options: OptionsFormValues[];
	register: ReturnType<UseFormRegister<FieldValues>>;
	selectedValue: string | undefined;
}

const AboutOverviewRadioInput = ({
	formField,
	options,
	register,
	selectedValue,
}: AboutOverviewRadioInputProps) => {
	return (
		<StyledRadioInputsContainer>
			{options.map(({ title, value }) => {
				const id = `${formField}-${title}`;
				return (
					<StyledRadioFormLabel size={2.5} htmlFor={id} key={id} className="option-label">
						<StyledRadio
							radioValue={value}
							id={id}
							selectedValue={selectedValue}
							register={register}
							size={1.5}
						/>
						<StyledLabelText>{title}</StyledLabelText>
					</StyledRadioFormLabel>
				);
			})}
		</StyledRadioInputsContainer>
	);
};

export default AboutOverviewRadioInput;
