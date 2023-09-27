import { useParams } from "react-router";
import { StyledUserAboutNav, StyledUserAboutNavItem } from "./UserAboutNav.styles";

const UserAboutNav = () => {
	const { id } = useParams<{ id: string }>();

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
					Places
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/contact_and_basic_info`}>
					Contact and Basic Info
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/family_and_relationships`}>
					Family and Relationships
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/details_about_you`}>
					Details About You
				</StyledUserAboutNavItem>
				<StyledUserAboutNavItem to={`/user/${id}/about/life_events`}>
					Life Events
				</StyledUserAboutNavItem>
			</StyledUserAboutNav>
		</div>
	);
};

export default UserAboutNav;
