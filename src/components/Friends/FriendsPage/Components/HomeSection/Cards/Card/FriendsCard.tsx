import {
	StyledFriendCard,
	StyledFriendCardTextContent,
	StyledFriendCardUserName,
} from "./FriendCard.styles";
import FriendCardImage from "./Image";
import FriendCardMutualFriends from "./MutualFriends";
import FriendCardButtons from "./Buttons/FriendCardButtons";
import useFriendCard from "./useFriendCard";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";

interface FriendCardProps {
	user: UserPreviewWithMutuals;
}

const FriendCard = ({
	user: { _id, avatarUrl, fullName, mutualFriends },
}: FriendCardProps) => {
	const { buttonOptions } = useFriendCard(_id);

	return (
		<StyledFriendCard>
			<FriendCardImage _id={_id} avatarUrl={avatarUrl} />
			<StyledFriendCardTextContent>
				<div>
					<StyledFriendCardUserName to={`/user/${_id}`}>
						{fullName}
					</StyledFriendCardUserName>
					<FriendCardMutualFriends mutualFriends={mutualFriends} />
				</div>
				{buttonOptions.length > 0 && <FriendCardButtons buttonOptions={buttonOptions} />}
			</StyledFriendCardTextContent>
		</StyledFriendCard>
	);
};

export default FriendCard;
