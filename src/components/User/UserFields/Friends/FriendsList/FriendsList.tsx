import { Link } from "react-router-dom";

import defaultUserAvatar from "../../Avatar/utils/defaultUserAvatar";
import { IFriendsDisplay } from "../types/FriendsTypes";
import { ExtraBoldText } from "@/styles/SharedStyles";
import {
	StyledFriendAvatar,
	StyledFriendCard,
	StyledFriendsContainer,
	StyledMutualFriends,
	StyledUserNameMutualFriendsContainer,
} from "./FriendsList.styles";
import FriendsListMoreOptions from "./MoreOptions/FriendsListMoreOptions";
import useCurrentUser from "@/hooks/useCurrentUser";

export interface FriendsListProps {
	friends: IFriendsDisplay | undefined;
	className?: string;
}

const FriendsList = ({ friends, className }: FriendsListProps) => {
	const { user: currentUser } = useCurrentUser();
	return (
		<StyledFriendsContainer className={className}>
			{friends?.map(({ avatarUrl, id, fullName, mutualFriends, ...rest }) => {
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
			})}
		</StyledFriendsContainer>
	);
};

export default FriendsList;
