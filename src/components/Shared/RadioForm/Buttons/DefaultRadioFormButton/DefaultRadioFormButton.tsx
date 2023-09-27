import { StyledDefaultRadioFormButton } from "./DefaultRadioFormButton.styles";

interface DefaultRadioFormButtonProps {
	icon: string | undefined;
	text: string;
	openDialog: () => void;
}

const DefaultRadioFormButton = ({
	icon,
	text,
	openDialog,
}: DefaultRadioFormButtonProps) => {
	return (
		<StyledDefaultRadioFormButton
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

// <StyledRadioFormButton
// 	colorClass={colorClass}
// 	text={currentSelected}
// 	showText={includeText}
// 	onClick={openDialog}
// 	icon={getSelectedOptionIcon(currentSelected)}
// 	iconSize={0.7}
