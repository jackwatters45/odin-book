import StandardButton from "@/components/Shared/StandardButton";
import { StyledFriendCardButtonContainer } from "./FriendCardButtons.styles";
import { buttonOptions } from "../types/FriendCardTypes";

interface FriendCardButtonsProps {
	buttonOptions: buttonOptions;
}

const FriendCardButtons = ({ buttonOptions }: FriendCardButtonsProps) => (
	<StyledFriendCardButtonContainer>
		{buttonOptions.map((options) => (
			<StandardButton key={options.text} {...options} />
		))}
	</StyledFriendCardButtonContainer>
);

export default FriendCardButtons;
