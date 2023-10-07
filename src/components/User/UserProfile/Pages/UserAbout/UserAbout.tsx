import { Outlet } from "react-router-dom";

import UserAboutNav from "./UserAboutNav/UserAboutNav";
import useUserAbout from "./useUserAbout";
import {
	StyledUserAboutRightColumn,
	StyledUserAboutSectionContainer,
} from "./UserAbout.styles";
import Photos from "@/components/User/UserProfile/Pages/UserPhotos";

const UserAbout = () => {
	const { user } = useUserAbout();

	return (
		<>
			<StyledUserAboutSectionContainer>
				<UserAboutNav userFirstName={user?.firstName as string} />
				<StyledUserAboutRightColumn>
					<Outlet context={{ user }} />
				</StyledUserAboutRightColumn>
			</StyledUserAboutSectionContainer>
			{/* TODO how to actually render the others + manage button state */}
			<Photos />
		</>
	);
};

export default UserAbout;
