import useCoverPhoto from "../Profile/useCoverPhoto";
import { ContentDiv } from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfile.styles";
import EditProfileSectionHeader from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfileSectionHeader";
import { StyledCoverPhoto } from "./CoverEditProfile.styles";

interface CoverEditProfileProps {
	coverPhotoUrl?: string;
}

const CoverEditProfile = ({ coverPhotoUrl }: CoverEditProfileProps) => {
	const {
		fileInputRef: coverPhotoFileInputRef,
		handleFileChange: handleCoverPhotoFileChange,
		handleUploadClick: handleCoverPhotoUploadClick,
	} = useCoverPhoto();

	return (
		<ContentDiv>
			<EditProfileSectionHeader
				title="Cover photo"
				isData={!!coverPhotoUrl}
				openDialog={handleCoverPhotoUploadClick}
			>
				<input
					type="file"
					accept="image/*"
					id="file-input"
					ref={coverPhotoFileInputRef}
					onChange={handleCoverPhotoFileChange}
					hidden
				/>
			</EditProfileSectionHeader>

			<div>
				<StyledCoverPhoto
					src={coverPhotoUrl || "https://placehold.co/500x200?text=Add a cover photo..."}
					alt="Cover"
				/>
			</div>
		</ContentDiv>
	);
};

export default CoverEditProfile;
