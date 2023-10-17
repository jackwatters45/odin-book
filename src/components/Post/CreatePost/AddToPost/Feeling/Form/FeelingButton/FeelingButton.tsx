import { EmojiCircleBackground } from "@/components/Nav/Nav.styles";
import { FeelingsType } from "../../Constants/feelingOptions";
import { StyledFeelingButton } from "./FeelingButton.styles";

interface FeelingButtonProps {
	feeling: FeelingsType;
	handleClick: (name: string) => void;
	isActive: boolean;
}

const FeelingButton = ({ feeling, handleClick, isActive }: FeelingButtonProps) => {
	return (
		<StyledFeelingButton
			key={feeling.name}
			onClick={() => handleClick(feeling.name)}
			type="button"
			className={isActive ? "active" : ""}
		>
			<EmojiCircleBackground>{feeling.emoji}</EmojiCircleBackground>
			<span>{feeling.name}</span>
		</StyledFeelingButton>
	);
};

export default FeelingButton;
