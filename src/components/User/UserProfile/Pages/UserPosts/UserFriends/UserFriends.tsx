import { Link } from "react-router-dom";

import { StyledFriend, StyledFriendsContainer } from "./UserFriends.styles";
import useUserFriends from "./useUserFriends";
import { defaultUserAvatar } from "@/config/globals";
import UserProfileSectionWithLink from "@/components/Shared/UserProfileSection/UserProfileSectionWithLink";

const UserFriends = () => {
	const { userId, friends } = useUserFriends();

	return (
		<UserProfileSectionWithLink
			title="Friends"
			seeAllLink={{
				to: `/user/${userId}/friends`,
				text: "See all friends",
			}}
		>
			<StyledFriendsContainer>
				{friends?.slice(0, 9).map(({ avatarUrl, id, fullName }) => (
					<StyledFriend key={id}>
						<Link to={`/user/${id}`}>
							<img src={avatarUrl || defaultUserAvatar} alt={"User friend"} />
							<span>{fullName}</span>
						</Link>
					</StyledFriend>
				))}
			</StyledFriendsContainer>
		</UserProfileSectionWithLink>
	);
};

export default UserFriends;
