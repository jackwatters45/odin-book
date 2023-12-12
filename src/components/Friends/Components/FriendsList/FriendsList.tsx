import { Link } from "react-router-dom";

import defaultUserAvatar from "../../../User/UserFields/Avatar/utils/defaultUserAvatar";
import { ExtraBoldText } from "@/styles/SharedStyles";
import {
	StyledFriendAvatar,
	StyledFriendCard,
	StyledFriendPlaceholder,
	StyledFriendsContainer,
	StyledMutualFriends,
	StyledUserNameMutualFriendsContainer,
} from "./FriendsList.styles";
import FriendsListMoreOptions from "../FriendStatus/MoreOptions/FriendStatusMoreOptions";
import useFriendsList from "./useFriendsList";
import { IFriendListDisplayFields } from "../../types/FriendsTypes";

export interface FriendsListProps {
	friends: IFriendListDisplayFields[] | undefined;
	className?: string;
}

const FriendsList = ({ friends, className }: FriendsListProps) => {
	const { currentUserId, containerWidth } = useFriendsList();

	return (
		<StyledFriendsContainer className={className}>
			{friends && friends.length ? (
				friends?.map(({ avatarUrl, _id, fullName, mutualFriends, ...rest }) => {
					const hasMutualFriends = mutualFriends?.length > 0;
					const isCurrentUser = currentUserId === _id;

					return (
						<StyledFriendCard key={_id} $containerWidth={containerWidth}>
							<Link to={`/user/${_id}`}>
								<StyledFriendAvatar
									$containerWidth={containerWidth}
									src={avatarUrl || defaultUserAvatar}
									alt={"User friend"}
								/>
							</Link>
							<StyledUserNameMutualFriendsContainer>
								<ExtraBoldText>
									<Link to={`/user/${_id}`}>{fullName}</Link>
								</ExtraBoldText>
								{hasMutualFriends && !isCurrentUser && (
									<StyledMutualFriends>
										<Link to={`/user/${_id}/friends/mutual`}>
											{mutualFriends?.length} mutual friends
										</Link>
									</StyledMutualFriends>
								)}
							</StyledUserNameMutualFriendsContainer>
							<FriendsListMoreOptions
								id={_id}
								isCurrentUser={isCurrentUser}
								hasMutualFriends={hasMutualFriends}
								{...rest}
							/>
						</StyledFriendCard>
					);
				})
			) : (
				<StyledFriendPlaceholder $containerWidth={containerWidth} />
			)}
		</StyledFriendsContainer>
	);
};

export default FriendsList;
