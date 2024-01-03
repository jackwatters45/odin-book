import { Link } from "react-router-dom";

import { IUser } from "@/types/IUser";
import CoverPhoto from "../../UserFields/CoverPhoto/Profile/CoverPhoto";
import ProfileAvatar from "../../UserFields/Avatar/Profile";
import EditProfile from "./EditProfile";
import {
	ProfileBottomBorder,
	StyledFriends,
	StyledNameFriendsContainer,
	StyledProfileBasicInfo,
	StyledProfileButtonContainer,
	StyledProfileMaxWidthContainer,
	StyledProfileRightColumn,
	StyledTranslatedSection,
} from "./ProfileBasicInfo.styles";
import ProfileFriendStatus from "../../../Friends/Components/FriendStatus/Profile";
import useProfileBasicInfo from "./useProfileBasicInfo";
import ProfileNav from "../ProfileNav";
import { StyledNavShadowX } from "@/styles/SharedStyles";

interface ProfileBasicInfoProps {
	user: IUser;
}

const ProfileBasicInfo = ({ user }: ProfileBasicInfoProps) => {
	const { containerWidth, isOwnProfile, mutualFriendsLength, showMutual } =
		useProfileBasicInfo({
			user,
		});

	return (
		<ProfileBottomBorder>
			<StyledProfileMaxWidthContainer>
				<CoverPhoto userCoverUrl={user.coverPhotoUrl} />
				<StyledTranslatedSection>
					<StyledProfileBasicInfo $containerWidth={containerWidth}>
						<ProfileAvatar avatarUrl={user.avatarUrl} />
						<StyledProfileRightColumn>
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
									<ProfileFriendStatus id={user._id} status={user.status} />
								)}
							</StyledProfileButtonContainer>
						</StyledProfileRightColumn>
					</StyledProfileBasicInfo>
					<ProfileNav />
				</StyledTranslatedSection>
				<StyledNavShadowX />
			</StyledProfileMaxWidthContainer>
		</ProfileBottomBorder>
	);
};

export default ProfileBasicInfo;
