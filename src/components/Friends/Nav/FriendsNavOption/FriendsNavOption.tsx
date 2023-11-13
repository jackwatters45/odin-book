import { IconCircleBackground } from "@/components/Nav/Nav.styles";
import { StyledFriendsNavOption } from "./FriendsNavOption.styles";

interface FriendsNavOptionProps {
	icon: string;
	text: string;
	to: string;
}

const FriendsNavOption = ({ icon, text, to }: FriendsNavOptionProps) => {
	return (
		<StyledFriendsNavOption to={to}>
			<IconCircleBackground path={icon} size={1.5} />
			<span>{text}</span>
		</StyledFriendsNavOption>
	);
};

export default FriendsNavOption;
