import { Navigate, Outlet } from "react-router";

import ProfileBasicInfo from "./ProfileBasicInfo";
import useUserProfile from "./useUserProfile";
import Loading from "../../Shared/Loading";
import ProfileNav from "./ProfileNav/ProfileNav";
import { MaxWidthContainer, ProfileBottomBorder } from "./UserProfile.styles";

const UserProfile = () => {
	const { user, isLoading } = useUserProfile();

	if (isLoading) return <Loading />;

	if (!user) return <Navigate to="/login" />;
	return (
		<div className="user-profile-container">
			<ProfileBottomBorder>
				<MaxWidthContainer>
					<ProfileBasicInfo user={user} />
					<ProfileNav />
				</MaxWidthContainer>
			</ProfileBottomBorder>
			<MaxWidthContainer>
				<Outlet />
			</MaxWidthContainer>
		</div>
	);
};

export default UserProfile;
