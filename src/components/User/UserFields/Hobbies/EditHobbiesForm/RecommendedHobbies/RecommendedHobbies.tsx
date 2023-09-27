import { FieldValues, UseFormRegister } from "react-hook-form";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

import { defaultHobbies } from "@/config/globals";
import OptionBadge from "@/components/Shared/OptionBadge";
import { StyledMoreOptionsButton } from "../EditHobbiesForm.styles";
import {
	StyledDefaultHobbiesContainer,
	StyledRecommendedHobbiesContainer,
	StyledRecommendedText,
} from "./RecommendedHobbies.styles";

interface RecommendedHobbiesProps {
	register: ReturnType<UseFormRegister<FieldValues>>;
	handleClickViewMore: () => void;
}

const RecommendedHobbies = ({
	register,
	handleClickViewMore,
}: RecommendedHobbiesProps) => {
	return (
		<StyledRecommendedHobbiesContainer>
			<StyledRecommendedText>RECOMMENDED HOBBIES</StyledRecommendedText>
			<StyledDefaultHobbiesContainer>
				{defaultHobbies.map(({ name, emoji }) => (
					<OptionBadge
						key={name}
						id={name}
						name={name}
						emoji={emoji}
						register={register}
					/>
				))}
			</StyledDefaultHobbiesContainer>
			<div>
				<StyledMoreOptionsButton onClick={handleClickViewMore}>
					<Icon path={mdiMagnify} size={0.8} color={"#1877f2"} />
					Search for others
				</StyledMoreOptionsButton>
			</div>
		</StyledRecommendedHobbiesContainer>
	);
};

export default RecommendedHobbies;
