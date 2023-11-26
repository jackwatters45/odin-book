import { Outlet } from "react-router-dom";

import UserAboutNav from "./UserAboutNav/UserAboutNav";
import useUserAbout from "./useUserAbout";
import {
	StyledUserAboutRightColumn,
	StyledUserAboutSectionContainer,
} from "./UserAbout.styles";
import UserFriends from "../UserFriends";

const UserAbout = () => {
	const { user, containerWidth, isOwnProfile } = useUserAbout();

	return (
		<>
			<StyledUserAboutSectionContainer
				$containerWidth={containerWidth}
				$isOwnProfile={isOwnProfile}
			>
				<UserAboutNav userFirstName={user?.firstName as string} />
				<StyledUserAboutRightColumn>
					<Outlet context={{ user }} />
				</StyledUserAboutRightColumn>
			</StyledUserAboutSectionContainer>
			<UserFriends isUsingLink={false} />
		</>
	);
};

export default UserAbout;
