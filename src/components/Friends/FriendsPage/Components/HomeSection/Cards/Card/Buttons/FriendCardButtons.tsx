import { HTMLAttributes, MouseEvent } from "react";

import StandardButton from "@/components/Shared/StandardButton";
import { StyledFriendCardButtonContainer } from "./FriendCardButtons.styles";
import { buttonOptions } from "../types/FriendCardTypes";

interface FriendCardButtonsProps extends HTMLAttributes<HTMLDivElement> {
	buttonOptions: buttonOptions;
}

const FriendCardButtons = ({ buttonOptions, ...props }: FriendCardButtonsProps) => (
	<StyledFriendCardButtonContainer {...props}>
		{buttonOptions.map((options) => (
			<StandardButton
				key={options.text}
				{...options}
				onClick={(e: MouseEvent<HTMLElement>) => {
					e.preventDefault();
					if (options.onClick) options.onClick();
				}}
			/>
		))}
	</StyledFriendCardButtonContainer>
);

export default FriendCardButtons;
