import useCoverPhoto from "../../../CoverPhoto/useCoverPhoto";
import { ContentDiv, StyledCoverPhoto } from "../../EditProfile.styles";

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
			<div>
				<h2>Cover photo</h2>
				<button onClick={handleCoverPhotoUploadClick}>
					{coverPhotoUrl ? "Edit" : "Add"}
				</button>
				<input
					type="file"
					accept="image/*"
					id="file-input"
					ref={coverPhotoFileInputRef}
					onChange={handleCoverPhotoFileChange}
					hidden
				/>
			</div>
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
