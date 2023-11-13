import FriendCard from "./Card/FriendsCard";
import { FriendPreview } from "../../types/FriendsTypes";
import { StyledFriendCardsContainer } from "./FriendCards.styles";

export interface FriendCardsProps {
	users: FriendPreview[];
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
