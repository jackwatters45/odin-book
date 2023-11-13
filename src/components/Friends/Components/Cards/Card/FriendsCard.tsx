import { Link } from "react-router-dom";

import StandardButton from "@/components/Shared/StandardButton";
import getListTitle from "@/utils/format/getListTitle";
import { FriendPreview } from "@/components/Friends/types/FriendsTypes";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";

import {
	StyledFriendCard,
	StyledFriendCardButtonContainer,
	StyledFriendCardImage,
	StyledFriendCardMutualFriends,
	StyledFriendCardMutualFriendsImageBorder,
	StyledFriendCardMutualFriendsImages,
	StyledFriendCardTextContent,
	StyledFriendCardUserName,
} from "./FriendCard.styles";

interface FriendCardProps {
	user: FriendPreview;
}

const FriendCard = ({
	user: { _id, avatarUrl, fullName, mutualFriends },
}: FriendCardProps) => {
	return (
		<StyledFriendCard>
			<Link to={_id} style={{ lineHeight: 0 }}>
				<StyledFriendCardImage src={avatarUrl || defaultUserAvatar} alt="Friend avatar" />
			</Link>
			<StyledFriendCardTextContent>
				<StyledFriendCardUserName to={_id}>{fullName}</StyledFriendCardUserName>
				<StyledFriendCardMutualFriends>
					{mutualFriends.length > 0 && (
						<>
							<StyledFriendCardMutualFriendsImages>
								<StyledFriendCardMutualFriendsImageBorder
									title={mutualFriends[0].fullName}
									src={mutualFriends[0]?.avatarUrl || defaultUserAvatar}
									alt="Friend avatar"
								/>
								{mutualFriends.length !== 1 && (
									<img
										title={mutualFriends[1].fullName}
										src={mutualFriends[1]?.avatarUrl || defaultUserAvatar}
										alt="Friend avatar"
									/>
								)}
							</StyledFriendCardMutualFriendsImages>
							<span title={getListTitle({ arr: mutualFriends, field: "fullName" })}>
								{mutualFriends?.length} mutual friend
								{mutualFriends.length !== 1 && "s"}
							</span>
						</>
					)}
				</StyledFriendCardMutualFriends>
				<StyledFriendCardButtonContainer>
					<StandardButton text="Confirm" colorClass="blue" />
					<StandardButton text="Delete" />
				</StyledFriendCardButtonContainer>
			</StyledFriendCardTextContent>
		</StyledFriendCard>
	);
};

export default FriendCard;
