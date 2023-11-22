import { FriendPreview } from "../../../../types/FriendsTypes";
import { StyledFriendCardsContainer } from "./FriendCards.styles";
import FriendCard from "./Card/FriendsCard";

export interface FriendCardsProps {
	users: FriendPreview[] | undefined;
}

const FriendCards = ({ users }: FriendCardsProps) => {
	return (
		<StyledFriendCardsContainer>
			{users?.map((user) => (
				<FriendCard key={user._id} user={user} />
			))}
		</StyledFriendCardsContainer>
	);
};

export default FriendCards;
