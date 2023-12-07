import { useParams } from "react-router";
import { StyledUserAboutNav, StyledUserAboutNavItem } from "./UserAboutNav.styles";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";

interface UserAboutNavProps {
	userFirstName: string;
}
const UserAboutNav = ({ userFirstName }: UserAboutNavProps) => {
	const { id } = useParams<{ id: string }>();

	const { isOwnProfile } = useProfileStatus();

	return (
		<div>
			<h3>About</h3>
			<StyledUserAboutNav>
				<StyledUserAboutNavItem to={`/user/${id}/about/`}>
					Overview
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/work_and_education`}>
					Work and Education
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/places`}>
					Places lived
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/contact_and_basic_info`}>
					Contact and Basic Info
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/family_and_relationships`}>
					Family and Relationships
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/details`}>
					Details About {isOwnProfile ? "You" : userFirstName}
				</StyledUserAboutNavItem>
			</StyledUserAboutNav>
		</div>
	);
};

export default UserAboutNav;
