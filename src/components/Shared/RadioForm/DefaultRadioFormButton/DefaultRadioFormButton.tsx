import { HTMLAttributes } from "react";
import { StyledDefaultRadioFormButton } from "./DefaultRadioFormButton.styles";

interface DefaultRadioFormButtonProps extends HTMLAttributes<HTMLButtonElement> {
	icon: string | undefined;
	text: string;
	openDialog: () => void;
}

const DefaultRadioFormButton = ({
	icon,
	text,
	openDialog,
	...props
}: DefaultRadioFormButtonProps) => {
	return (
		<StyledDefaultRadioFormButton
			{...props}
			icon={icon}
			onClick={openDialog}
			text={text}
			iconColor="#65676B"
			iconSize={0.8}
			colorClass="transparent"
			showText={false}
		/>
	);
};

export default DefaultRadioFormButton;
