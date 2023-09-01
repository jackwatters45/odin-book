import { FieldValues, UseFormRegister } from "react-hook-form";

import { CenteredDiv } from "@/styles/SharedStyles";
import { hobbiesBank } from "@/config/globals";
import OptionBadge from "../../../../../../../Shared/OptionBadge";
import { StyledDisplayHobbiesContainer } from "./HobbiesDisplay.styles";

interface HobbiesDisplayProps {
	isHobbies: boolean;
	hobbiesValue: string[];
	register: ReturnType<UseFormRegister<FieldValues>>;
}

const HobbiesDisplay = ({ isHobbies, hobbiesValue, register }: HobbiesDisplayProps) => {
	return (
		<div>
			{isHobbies ? (
				<StyledDisplayHobbiesContainer>
					{hobbiesValue?.map((name) => {
						const hobbyData = hobbiesBank.find((hobby) => hobby.name === name);
						return (
							<OptionBadge
								key={name}
								name={name}
								emoji={hobbyData?.emoji}
								register={register}
								isLink={true}
							/>
						);
					})}
				</StyledDisplayHobbiesContainer>
			) : (
				<CenteredDiv>
					<p>Add your hobbies...</p>
				</CenteredDiv>
			)}
		</div>
	);
};

export default HobbiesDisplay;
