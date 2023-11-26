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
	StyledUserProfileContentContainer,
} from "./UserProfile.styles";
import ContainerWidthProvider from "./context/ContainerWidthProvider";

const UserProfile = () => {
	const { user, isLoading, isError } = useUserProfile();

	if (isError) return <Navigate to="/404" />;
	else if (isLoading) return <Loading />;
	else if (!user) return <Navigate to="/login" />;

	return (
		<ContainerWidthProvider>
			<ProfileContainer className="user-profile-container">
				<ProfileBottomBorder>
					<MaxWidthContainer>
						<ProfileBasicInfo user={user} />
						<ProfileNav />
					</MaxWidthContainer>
				</ProfileBottomBorder>
				<OutletWrapper>
					<MaxWidthContainer>
						<StyledUserProfileContentContainer>
							<Outlet context={{ user }} />
						</StyledUserProfileContentContainer>
					</MaxWidthContainer>
				</OutletWrapper>
			</ProfileContainer>
		</ContainerWidthProvider>
	);
};

export default UserProfile;
