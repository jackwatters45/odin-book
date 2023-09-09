import { Navigate, Outlet } from "react-router";

import ProfileBasicInfo from "./ProfileBasicInfo";
import useUserProfile from "./useUserProfile";
import Loading from "../../Shared/Loading";
import ProfileNav from "./ProfileNav/ProfileNav";
import {
	MaxWidthContainer,
	OutletWrapper,
	ProfileBottomBorder,
	ProfileContainer,
} from "./UserProfile.styles";

const UserProfile = () => {
	const { user, isLoading } = useUserProfile();

	if (isLoading) return <Loading />;

	if (!user) return <Navigate to="/login" />;

	return (
		<ProfileContainer className="user-profile-container">
			<ProfileBottomBorder>
				<MaxWidthContainer>
					<ProfileBasicInfo user={user} />
					<ProfileNav />
				</MaxWidthContainer>
			</ProfileBottomBorder>
			<OutletWrapper>
				<MaxWidthContainer>
					<Outlet context={{ user }} />
				</MaxWidthContainer>
			</OutletWrapper>
		</ProfileContainer>
	);
};

export default UserProfile;
