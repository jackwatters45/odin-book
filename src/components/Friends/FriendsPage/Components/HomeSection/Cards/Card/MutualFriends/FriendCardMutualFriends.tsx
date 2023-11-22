import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import { UserPreview } from "@/types/IPost";
import getListTitle from "@/utils/format/getListTitle";
import {
	StyledFriendCardMutualFriends,
	StyledFriendCardMutualFriendsImageBorder,
	StyledFriendCardMutualFriendsImages,
} from "./FriendCardMutualFriends.styles";
import { HTMLAttributes } from "react";

interface FriendCardMutualFriendsProps extends HTMLAttributes<HTMLDivElement> {
	mutualFriends: UserPreview[];
}

const FriendCardMutualFriends = ({
	mutualFriends,
	...props
}: FriendCardMutualFriendsProps) => (
	<StyledFriendCardMutualFriends {...props}>
		{mutualFriends?.length > 0 && (
			<>
				<StyledFriendCardMutualFriendsImages>
					<StyledFriendCardMutualFriendsImageBorder
						title={mutualFriends[0].fullName}
						src={mutualFriends[0]?.avatarUrl || defaultUserAvatar}
						alt="Friend avatar"
					/>
					{mutualFriends?.length !== 1 && (
						<img
							title={mutualFriends[1].fullName}
							src={mutualFriends[1]?.avatarUrl || defaultUserAvatar}
							alt="Friend avatar"
						/>
					)}
				</StyledFriendCardMutualFriendsImages>
				<span title={getListTitle({ arr: mutualFriends, field: "fullName" })}>
					{mutualFriends?.length} mutual friend
					{mutualFriends?.length !== 1 && "s"}
				</span>
			</>
		)}
	</StyledFriendCardMutualFriends>
);

export default FriendCardMutualFriends;
