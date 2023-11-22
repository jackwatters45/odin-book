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
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { IFriendsDisplay } from "../../types/FriendsTypes";

export interface FriendsListProps {
	friends: IFriendsDisplay | undefined;
	className?: string;
}

const FriendsList = ({ friends, className }: FriendsListProps) => {
	const currentUser = useCurrentUserCached();
	return (
		<StyledFriendsContainer className={className}>
			{friends && friends.length ? (
				friends?.map(({ avatarUrl, id, fullName, mutualFriends, ...rest }) => {
					const hasMutualFriends = mutualFriends?.length > 0;
					const isCurrentUser = currentUser?._id === id;
					return (
						<StyledFriendCard key={id}>
							<Link to={`/user/${id}`}>
								<StyledFriendAvatar
									src={avatarUrl || defaultUserAvatar}
									alt={"User friend"}
								/>
							</Link>
							<StyledUserNameMutualFriendsContainer>
								<ExtraBoldText>
									<Link to={`/user/${id}`}>{fullName}</Link>
								</ExtraBoldText>
								{hasMutualFriends && !isCurrentUser && (
									<StyledMutualFriends>
										<Link to={`/user/${id}/friends/mutual`}>
											{mutualFriends?.length} mutual friends
										</Link>
									</StyledMutualFriends>
								)}
							</StyledUserNameMutualFriendsContainer>
							<FriendsListMoreOptions
								id={id}
								isCurrentUser={isCurrentUser}
								hasMutualFriends={hasMutualFriends}
								{...rest}
							/>
						</StyledFriendCard>
					);
				})
			) : (
				<StyledFriendPlaceholder />
			)}
		</StyledFriendsContainer>
	);
};

export default FriendsList;
