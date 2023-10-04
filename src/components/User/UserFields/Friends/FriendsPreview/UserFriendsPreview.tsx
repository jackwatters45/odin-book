import { Link } from "react-router-dom";

import { StyledFriend, StyledFriendsContainer } from "./UserFriendsPreview.styles";
import useUserFriendsPreview from "./useUserFriendsPreview";
import UserProfileSectionWithLink from "@/components/User/Shared/UserProfileSection/UserProfileSectionWithLink";
import defaultUserAvatar from "../../Avatar/utils/defaultUserAvatar";

const UserFriendsPreview = () => {
	const { userId, friends } = useUserFriendsPreview();

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

export default UserFriendsPreview;
