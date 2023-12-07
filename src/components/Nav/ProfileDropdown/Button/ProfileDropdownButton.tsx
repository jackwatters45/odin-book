import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import { StyledImageCircle } from "./ProfileDropdownButton.styles";

interface ProfileDropdownButtonProps {
	onClick: () => void;
}

const ProfileDropdownButton = ({ onClick }: ProfileDropdownButtonProps) => {
	const avatarUrl = useCurrentUserCached()?.avatarUrl;

	return (
		<StyledImageCircle
			onClick={onClick}
			src={avatarUrl || defaultUserAvatar}
			alt="User profile icon"
		/>
	);
};

export default ProfileDropdownButton;
