import ProfileDropdownButton from "./Button/ProfileDropdownButton";
import ProfileDropdownContent from "./Dialog/ProfileDropdownContent";
import { StyledProfileNavDropdown } from "./ProfileDropdown.styles";

const ProfileDropdown = () => (
	<StyledProfileNavDropdown
		Button={ProfileDropdownButton}
		DialogContent={ProfileDropdownContent}
	/>
);

export default ProfileDropdown;
