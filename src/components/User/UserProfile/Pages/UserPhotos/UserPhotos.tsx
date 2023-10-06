import UserProfileSection from "@/components/User/Shared/UserProfileSection";
import PhotosAdd from "./PhotosAdd/PhotosAdd";
import useUserPhotos from "./useUserPhotos";
import PhotosDisplay from "@/components/User/UserFields/Photos/PhotosDisplay";
import { StyledProfileLink } from "../../ProfileNav/ProfileNav.styles";
import { StyledProfileSectionNav } from "@/styles/SharedStyles";

const UserPhotos = () => {
	const { isPhotosOfYou, isYourPhotos, photos } = useUserPhotos();

	return (
		<UserProfileSection title="Photos" rightColumn={<PhotosAdd />}>
			<StyledProfileSectionNav>
				<StyledProfileLink isActive={isPhotosOfYou} to={"of"} text="Photos of you" />
				<StyledProfileLink to={"by"} text="Your photos" isActive={isYourPhotos} />
			</StyledProfileSectionNav>
			<PhotosDisplay photos={photos} />
		</UserProfileSection>
	);
};

export default UserPhotos;
