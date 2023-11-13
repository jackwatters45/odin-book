import { ReactNode } from "react";

import FriendsHomeSectionHeader, {
	FriendsHomeSectionHeaderProps,
} from "../../../Components/Header/FriendsHomeSectionHeader";
import FriendCards from "@/components/Friends/Components/Cards";
import { FriendCardsProps } from "@/components/Friends/Components/Cards/FriendCards";
import { StyledHomeSectionContainer } from "./FriendsHomeSection.styles";

interface FriendsHomeSectionProps
	extends FriendsHomeSectionHeaderProps,
		FriendCardsProps {
	children?: ReactNode;
}

const FriendsHomeSection = ({
	title,
	link,
	users,
	children,
}: FriendsHomeSectionProps) => {
	return (
		<StyledHomeSectionContainer>
			<FriendsHomeSectionHeader title={title} link={link} />
			<FriendCards users={users} />
			{children}
		</StyledHomeSectionContainer>
	);
};

export default FriendsHomeSection;
