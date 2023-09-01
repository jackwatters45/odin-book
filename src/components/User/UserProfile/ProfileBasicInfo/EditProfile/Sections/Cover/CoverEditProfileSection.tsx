import useCoverPhoto from "../../../CoverPhoto/useCoverPhoto";
import { ContentDiv } from "../../EditProfile.styles";
import EditProfileSectionHeader from "../../EditProfileSectionHeader";
import { StyledCoverPhoto } from "./CoverEditProfileSection.styles";

interface CoverEditProfileSectionProps {
	coverPhotoUrl?: string;
}

const CoverEditProfileSection = ({ coverPhotoUrl }: CoverEditProfileSectionProps) => {
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

export default CoverEditProfileSection;
