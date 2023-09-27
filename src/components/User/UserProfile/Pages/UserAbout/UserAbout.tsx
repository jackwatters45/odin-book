import { Outlet } from "react-router-dom";

import UserAboutNav from "./UserAboutNav/UserAboutNav";
import useUserAbout from "./useUserAbout";
import {
	StyledUserAboutRightColumn,
	StyledUserAboutSectionContainer,
	StyledUserProfileContentContainer,
} from "./UserAbout.styles";

const UserAbout = () => {
	const { user } = useUserAbout();

	return (
		<StyledUserProfileContentContainer>
			<StyledUserAboutSectionContainer>
				<UserAboutNav />
				<StyledUserAboutRightColumn>
					<Outlet context={{ user }} />
				</StyledUserAboutRightColumn>
			</StyledUserAboutSectionContainer>
		</StyledUserProfileContentContainer>
	);
};

export default UserAbout;
