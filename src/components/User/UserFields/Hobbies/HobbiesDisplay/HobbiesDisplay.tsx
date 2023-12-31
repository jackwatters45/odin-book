import { FieldValues, UseFormRegister } from "react-hook-form";

import { CenteredDiv } from "@/styles/SharedStyles";
import { hobbiesBank } from "@/config/globals";
import { StyledDisplayHobbiesContainer } from "./HobbiesDisplay.styles";
import OptionBadge from "@/components/Shared/OptionBadge";

interface HobbiesDisplayProps {
	hobbiesValue: string[] | undefined;
	register: ReturnType<UseFormRegister<FieldValues>>;
}

const HobbiesDisplay = ({ hobbiesValue, register }: HobbiesDisplayProps) => {
	return (
		<div>
			{hobbiesValue && hobbiesValue.length > 0 ? (
				<StyledDisplayHobbiesContainer>
					{hobbiesValue?.map((name) => {
						const hobbyData = hobbiesBank.find((hobby) => hobby.name === name);
						return (
							<OptionBadge
								key={name}
								id={name}
								emoji={hobbyData?.emoji}
								register={register}
								disabled={true}
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
