import UserProfileSectionWithLink from "@/components/User/Shared/UserProfileSection/UserProfileSectionWithLink";
import PhotosDisplayPreview from "@/components/User/UserFields/Photos/PhotosDisplay/PhotosDisplayPreview";
import UseFetchPhotos from "@/components/User/UserFields/Photos/UseFetchPhotos";

const PhotosPreview = () => {
	const { userId, photos } = UseFetchPhotos({ photosType: "photos-of", limit: 9 });

	return (
		<UserProfileSectionWithLink
			title="Photos"
			seeAllLink={{
				to: `/user/${userId}/photos`,
				text: "See all photos",
			}}
		>
			<PhotosDisplayPreview photos={photos} />
		</UserProfileSectionWithLink>
	);
};

export default PhotosPreview;
