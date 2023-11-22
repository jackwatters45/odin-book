import { Link } from "react-router-dom";

import { IUser } from "@/types/IUser";
import CoverPhoto from "../../UserFields/CoverPhoto/Profile/CoverPhoto";
import ProfileAvatar from "../../UserFields/Avatar/Profile";
import EditProfile from "./EditProfile";
import {
	StyledFriends,
	StyledNameFriendsContainer,
	StyledProfileBasicInfo,
	StyledProfileButtonContainer,
} from "./ProfileBasicInfo.styles";
import ProfileFriendStatus from "../../../Friends/Components/FriendStatus/Profile";
import useProfileBasicInfo from "./useProfileBasicInfo";

interface ProfileBasicInfoProps {
	user: IUser;
}

const ProfileBasicInfo = ({ user }: ProfileBasicInfoProps) => {
	const { isOwnProfile, mutualFriendsLength, showMutual } = useProfileBasicInfo({
		user,
	});

	return (
		<>
			<CoverPhoto userCoverUrl={user.coverPhotoUrl} />
			<StyledProfileBasicInfo>
				<ProfileAvatar avatarUrl={user.avatarUrl} />
				<StyledNameFriendsContainer>
					<h1>{user.fullName}</h1>
					<StyledFriends>
						<Link to="friends">{user.friends.length} friends</Link>
						{showMutual && " • "}
						<Link to="friends/mutual">
							{showMutual && `${mutualFriendsLength} mutual`}
						</Link>
					</StyledFriends>
				</StyledNameFriendsContainer>
				<StyledProfileButtonContainer>
					{isOwnProfile ? (
						<EditProfile user={user} />
					) : (
						<ProfileFriendStatus user={user} />
					)}
				</StyledProfileButtonContainer>
			</StyledProfileBasicInfo>
		</>
	);
};

export default ProfileBasicInfo;
