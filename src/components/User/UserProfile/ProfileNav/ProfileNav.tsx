import { StyledNavShadowX } from "@/styles/SharedStyles";
import {
	StyledProfileNavContents,
	StyledProfileLink,
	StyledProfileNavContainer,
} from "./ProfileNav.styles";
import useProfileNav from "./useProfileNav";

const ProfileNav = () => {
	const { isRoot, isAbout, isFriends, isPhotos, containerWidth } = useProfileNav();

	return (
		<StyledProfileNavContainer>
			<StyledProfileNavContents>
				<StyledProfileLink
					to={""}
					text="Posts"
					isActive={isRoot}
					end={true}
					$containerWidth={containerWidth}
				/>
				<StyledProfileLink
					to={"about/"}
					text="About"
					isActive={isAbout}
					$containerWidth={containerWidth}
				/>
				<StyledProfileLink
					to={"friends/"}
					text="Friends"
					isActive={isFriends}
					$containerWidth={containerWidth}
				/>
				<StyledProfileLink
					to={"photos/"}
					text="Photos"
					isActive={isPhotos}
					$containerWidth={containerWidth}
				/>
			</StyledProfileNavContents>
			<StyledNavShadowX />
		</StyledProfileNavContainer>
	);
};

export default ProfileNav;
