import { StyledFriendCardsContainer } from "./FriendCards.styles";
import FriendCard from "./Card/FriendsCard";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";
import useFriendCards from "./useFriendCards";

export interface FriendCardsProps {
	users: UserPreviewWithMutuals[] | undefined;
	setItemsPerRow: ((num: number) => void) | undefined;
}

const FriendCards = ({ users, setItemsPerRow }: FriendCardsProps) => {
	const { ref } = useFriendCards({ setItemsPerRow });

	return (
		<StyledFriendCardsContainer ref={ref}>
			{users?.map((user) => (
				<FriendCard key={user._id} user={user} />
			))}
		</StyledFriendCardsContainer>
	);
};

export default FriendCards;
