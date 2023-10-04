import { Link } from "react-router-dom";

import { IUser } from "@/types/IUser";
import CoverPhoto from "../../UserFields/CoverPhoto/Profile/CoverPhoto";
import ProfileAvatar from "../../UserFields/Avatar/Profile";
import EditProfile from "./EditProfile";
import {
	StyledFriends,
	StyledNameFriendsContainer,
	StyledProfileBasicInfo,
} from "./ProfileBasicInfo.styles";

interface ProfileBasicInfoProps {
	user: IUser;
}

const ProfileBasicInfo = ({ user }: ProfileBasicInfoProps) => {
	const { avatarUrl, coverPhotoUrl, fullName, friends } = user;

	return (
		<>
			<CoverPhoto userCoverUrl={coverPhotoUrl} />
			<StyledProfileBasicInfo>
				<ProfileAvatar avatarUrl={avatarUrl} />
				<StyledNameFriendsContainer>
					<h1>{fullName}</h1>
					<StyledFriends>
						<Link to="friends">{friends.length} friends</Link>
					</StyledFriends>
				</StyledNameFriendsContainer>
				<EditProfile user={user} />
			</StyledProfileBasicInfo>
		</>
	);
};

export default ProfileBasicInfo;
