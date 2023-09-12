import { Link } from "react-router-dom";

import UserProfileSection from "@/components/Shared/UserProfileSection";
import { StyledFriend, StyledFriendsContainer } from "./UserFriends.styles";
import useUserFriends from "./useUserFriends";
import { defaultUserAvatar } from "@/config/globals";

const UserFriends = () => {
	const { userId, friends } = useUserFriends();

	return (
		<UserProfileSection
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
		</UserProfileSection>
	);
};

export default UserFriends;
