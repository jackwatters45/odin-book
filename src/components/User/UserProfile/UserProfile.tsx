import { Navigate, Outlet } from "react-router";

import ProfileBasicInfo from "./ProfileBasicInfo";
import useUserProfile from "./useUserProfile";
import Loading from "../../Shared/Loading";
import {
	MaxWidthContainer,
	OutletWrapper,
	ProfileContainer,
	StyledUserProfileContentContainer,
} from "./UserProfile.styles";

const UserProfile = () => {
	const { user, isLoading, isError } = useUserProfile();

	if (isError) return <Navigate to="/404" />;
	else if (isLoading) return <Loading />;
	else if (!user) return <Navigate to="/login" />;

	return (
		<ProfileContainer>
			<ProfileBasicInfo user={user} />
			<OutletWrapper>
				<MaxWidthContainer>
					<StyledUserProfileContentContainer>
						<Outlet context={{ user }} />
					</StyledUserProfileContentContainer>
				</MaxWidthContainer>
			</OutletWrapper>
		</ProfileContainer>
	);
};

export default UserProfile;
