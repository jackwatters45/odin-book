import { FieldValues, Path, PathValue } from "react-hook-form";
import { RadioFormOption } from "../RadioForm";
import {
	StyledRadioFormLabel,
	StyledRadioFormDialogContentContainer,
	StyledIconCircleBackground,
	StyledTitleContainer,
} from "./RadioFormDialogContent.styles";
import { Dispatch, SetStateAction } from "react";
import StyledRadio from "../../StyledRadio";

interface RadioFormDialogContentProps<T extends FieldValues> {
	options: RadioFormOption[];
	formField: Path<T>;
	popupValue: PathValue<T, Path<T>> | undefined;
	setPopupValue: Dispatch<SetStateAction<PathValue<T, Path<T>> | undefined>>;
}

const RadioFormDialogContent = <T extends FieldValues>({
	options,
	formField,
	popupValue,
	setPopupValue,
}: RadioFormDialogContentProps<T>) => {
	return (
		<StyledRadioFormDialogContentContainer>
			{options.map(({ icon, title, value, subtitle }) => {
				const id = `${formField}-${title}`;
				const selectedValue = popupValue?.[formField] || popupValue;
				return (
					<StyledRadioFormLabel htmlFor={id} key={id} className="option-label">
						{icon && (
							<StyledIconCircleBackground path={icon} size={2.5} color={"black"} />
						)}
						<StyledTitleContainer>
							<h4>{title}</h4>
							{subtitle && <span>{subtitle}</span>}
						</StyledTitleContainer>
						<StyledRadio
							radioValue={value}
							id={id}
							selectedValue={selectedValue}
							onChange={() =>
								setPopupValue({ [formField]: value } as PathValue<T, Path<T>>)
							}
						/>
					</StyledRadioFormLabel>
				);
			})}
		</StyledRadioFormDialogContentContainer>
	);
};

export default RadioFormDialogContent;
