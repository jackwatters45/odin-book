import { StyledNavShadow } from "@/styles/SharedStyles";
import {
	ProfileNavContents,
	ProfileLink,
	ProfileNavContainer,
} from "./ProfileNav.styles";
import useProfileNav from "./useProfileNav";

const ProfileNav = () => {
	const { rootUrl, defaultLink } = useProfileNav();

	return (
		<ProfileNavContainer>
			<ProfileNavContents>
				<ProfileLink className={defaultLink} to={`${rootUrl}/`} text="Posts" />
				<ProfileLink to={`${rootUrl}/about/`} text="About" />
				<ProfileLink to={`${rootUrl}/friends/`} text="Friends" />
				<ProfileLink to={`${rootUrl}/photos/`} text="Photos" />
				<ProfileLink to={`${rootUrl}/videos/`} text="Videos" />
				<ProfileLink to={`${rootUrl}/check-ins/`} text="Check-ins" />
				{/* TODO more */}
				<ProfileLink to={`${rootUrl}/more/`} text="More" />
			</ProfileNavContents>
			<StyledNavShadow />
		</ProfileNavContainer>
	);
};

export default ProfileNav;
