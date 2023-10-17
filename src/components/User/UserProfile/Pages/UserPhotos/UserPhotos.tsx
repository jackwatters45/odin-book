import UserProfileSection from "@/components/User/Shared/UserProfileSection";
import PhotosAdd from "./PhotosAdd/PhotosAdd";
import useUserPhotos from "./useUserPhotos";
import UserPhotosNav from "./UserPhotosNav";
import PhotosDisplay from "@/components/User/UserFields/Photos/PhotosDisplay";

interface UserPhotosProps {
	isUsingLink?: boolean;
}

const UserPhotos = ({ isUsingLink = true }: UserPhotosProps) => {
	const { userFirstName, isOwnProfile, activeTabSelector, setSelectedTab, photos } =
		useUserPhotos({ isUsingLink });

	return (
		<UserProfileSection title="Photos" rightColumn={<PhotosAdd />}>
			<UserPhotosNav
				isOwnProfile={isOwnProfile}
				userFirstName={userFirstName}
				isUsingLink={isUsingLink}
				setSelectedTab={setSelectedTab}
				activeTabSelector={activeTabSelector}
			/>
			<PhotosDisplay photos={photos} />
		</UserProfileSection>
	);
};

export default UserPhotos;
