import { mdiAccount, mdiLogoutVariant } from "@mdi/js";

import useProfileDropdownContent from "./useProfileDropdownContent";
import {
	IconCircleBackground,
	StyledDropdownButton,
	StyledDropdownLink,
} from "../../Nav.styles";

interface ProfileDropdownContentProps {
	closeDialog: () => void;
}

const ProfileDropdownContent = ({ closeDialog }: ProfileDropdownContentProps) => {
	const { userId, handleClickLogout } = useProfileDropdownContent();

	return (
		<>
			<StyledDropdownLink
				to={`/user/${userId}/`}
				onClick={closeDialog}
				text="Profile"
				icon={<IconCircleBackground path={mdiAccount} size={1.5} color={"#1c1e21"} />}
			/>
			<StyledDropdownButton
				onClick={handleClickLogout}
				text="Log out"
				icon={
					<IconCircleBackground path={mdiLogoutVariant} size={1.5} color={"#1c1e21"} />
				}
			/>
		</>
	);
};

export default ProfileDropdownContent;
