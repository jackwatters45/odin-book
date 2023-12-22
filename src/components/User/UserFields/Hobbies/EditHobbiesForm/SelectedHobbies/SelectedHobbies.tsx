import { FieldValues, UseFormRegister } from "react-hook-form";

import OptionBadge from "@/components/Shared/OptionBadge";
import { hobbiesBank } from "@/config/globals";
import { StyledSelectedHobbiesContainer } from "./SelectedHobbies.styles";
import { StyledUppercaseText } from "@/styles/SharedStyles";

interface SelectedHobbiesProps {
	hobbiesValue: string[];
	register: ReturnType<UseFormRegister<FieldValues>>;
}

const SelectedHobbies = ({ hobbiesValue, register }: SelectedHobbiesProps) => {
	return (
		<div>
			<StyledUppercaseText>SELECTED HOBBIES</StyledUppercaseText>
			<StyledSelectedHobbiesContainer>
				{hobbiesValue?.map((name) => {
					const emoji = hobbiesBank.find((hobby) => hobby.name === name)?.emoji;
					return (
						<OptionBadge
							key={name}
							id={name}
							emoji={emoji}
							register={register}
							showDelete={true}
						/>
					);
				})}
			</StyledSelectedHobbiesContainer>
		</div>
	);
};

export default SelectedHobbies;
