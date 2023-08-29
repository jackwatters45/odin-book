import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import { IUser } from "../../../../../types/IUser";
import CoverPhoto from "./CoverPhoto";
import ProfileAvatar from "./ProfileAvatar";
import {
	StyledEditProfileButton,
	StyledFriends,
	StyledNameFriendsContainer,
	StyledProfileBasicInfo,
} from "./ProfileBasicInfo.styles";

interface ProfileBasicInfoProps {
	user: IUser;
}

const ProfileBasicInfo = ({ user }: ProfileBasicInfoProps) => {
	const { avatarUrl, coverUrl } = user;

	return (
		<>
			<CoverPhoto userCoverUrl={coverUrl} />
			<StyledProfileBasicInfo>
				<ProfileAvatar avatarUrl={avatarUrl} />
				<StyledNameFriendsContainer>
					<h1>{user.fullName}</h1>
					<StyledFriends>
						<Link to="friends">{user.friends.length} friends</Link>
					</StyledFriends>
				</StyledNameFriendsContainer>
				<StyledEditProfileButton>
					<Icon path={mdiPencil} size={0.75} />
					Edit profile
				</StyledEditProfileButton>
				{/* TODO edit profile modal */}
			</StyledProfileBasicInfo>
		</>
	);
};

export default ProfileBasicInfo;
