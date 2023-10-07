import UserProfileSection from "@/components/User/Shared/UserProfileSection";
import PhotosAdd from "./PhotosAdd/PhotosAdd";
import useUserPhotos from "./useUserPhotos";
import PhotosDisplay from "@/components/User/UserFields/Photos/PhotosDisplay";
import { StyledProfileLink } from "../../ProfileNav/ProfileNav.styles";
import { StyledProfileSectionNav } from "@/styles/SharedStyles";

const UserPhotos = () => {
	const { userFirstName, isOwnProfile, isPhotosOfYou, isYourPhotos, photos } =
		useUserPhotos();

	return (
		<UserProfileSection title="Photos" rightColumn={<PhotosAdd />}>
			<StyledProfileSectionNav>
				<StyledProfileLink
					isActive={isPhotosOfYou}
					to={"of"}
					text={`Photos of ${isOwnProfile ? "you" : `${userFirstName}`}`}
				/>
				<StyledProfileLink
					to={"by"}
					text={`${isOwnProfile ? "Your" : `${userFirstName}'s`} photos`}
					isActive={isYourPhotos}
				/>
			</StyledProfileSectionNav>
			<PhotosDisplay photos={photos} />
		</UserProfileSection>
	);
};

export default UserPhotos;
