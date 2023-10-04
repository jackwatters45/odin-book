import { StyledNavShadow } from "@/styles/SharedStyles";
import {
	StyledProfileNavContents,
	StyledProfileLink,
	StyledProfileNavContainer,
} from "./ProfileNav.styles";

const ProfileNav = () => {
	return (
		<StyledProfileNavContainer>
			<StyledProfileNavContents>
				<StyledProfileLink to={""} text="Posts" />
				<StyledProfileLink to={"about/"} text="About" />
				<StyledProfileLink to={"friends/"} text="Friends" />
				<StyledProfileLink to={"photos/"} text="Photos" />
				<StyledProfileLink to={"videos/"} text="Videos" />
				<StyledProfileLink to={"check-ins/"} text="Check-ins" />
				<StyledProfileLink to={"more/"} text="More" />
			</StyledProfileNavContents>
			<StyledNavShadow />
		</StyledProfileNavContainer>
	);
};

export default ProfileNav;
