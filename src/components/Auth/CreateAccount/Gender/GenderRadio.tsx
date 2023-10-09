import StyledRadio from "@/components/Shared/StyledRadio";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CreateAccountInputs } from "../useCreateAccountForm";
import { StyledGenderRadioContainer, StyledRadioContainer } from "./GenderRadio.styles";

interface GenderRadioProps {
	selectedGenderOption: string;
	register: UseFormRegister<CreateAccountInputs>;
	errors: FieldErrors<CreateAccountInputs>;
}

const GenderRadio = ({ register, errors, selectedGenderOption }: GenderRadioProps) => {
	return (
		<StyledGenderRadioContainer>
			<label htmlFor="gender">Gender</label>
			<div>
				<StyledRadioContainer htmlFor="male">
					<span>Male</span>
					<StyledRadio
						id={"male"}
						radioValue="male"
						selectedValue={selectedGenderOption}
						register={register("gender")}
					/>
				</StyledRadioContainer>
				<StyledRadioContainer htmlFor="female">
					<span>Female</span>
					<StyledRadio
						id="female"
						radioValue="female"
						selectedValue={selectedGenderOption}
						register={register("gender")}
					/>
				</StyledRadioContainer>
				<StyledRadioContainer htmlFor="other">
					<span>Custom</span>
					<StyledRadio
						id={"other"}
						radioValue="custom"
						selectedValue={selectedGenderOption}
						register={register("gender")}
					/>
				</StyledRadioContainer>
			</div>

			{errors.gender && <div>{errors.gender.message as string}</div>}
		</StyledGenderRadioContainer>
	);
};

export default GenderRadio;
