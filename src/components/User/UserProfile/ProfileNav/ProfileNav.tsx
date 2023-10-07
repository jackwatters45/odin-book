import { StyledNavShadow } from "@/styles/SharedStyles";
import {
	StyledProfileNavContents,
	StyledProfileLink,
	StyledProfileNavContainer,
} from "./ProfileNav.styles";
import { useMatch } from "react-router";

const ProfileNav = () => {
	const isRoot = !!useMatch("/user/:id/");
	const isAbout = !!useMatch("/user/:id/about/*");
	const isFriends = !!useMatch("/user/:id/friends/*");
	const isPhotos = !!useMatch("/user/:id/photos/*");

	return (
		<StyledProfileNavContainer>
			<StyledProfileNavContents>
				<StyledProfileLink to={""} text="Posts" isActive={isRoot} end={true} />
				<StyledProfileLink to={"about/"} text="About" isActive={isAbout} />
				<StyledProfileLink to={"friends/"} text="Friends" isActive={isFriends} />
				<StyledProfileLink to={"photos/"} text="Photos" isActive={isPhotos} />
			</StyledProfileNavContents>
			<StyledNavShadow />
		</StyledProfileNavContainer>
	);
};

export default ProfileNav;
