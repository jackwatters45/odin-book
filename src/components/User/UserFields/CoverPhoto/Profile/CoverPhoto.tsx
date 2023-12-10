import { mdiCamera } from "@mdi/js";

import useCoverPhoto from "./useCoverPhoto";
import {
	StyledContainer,
	StyledCoverPhoto,
	StyledDiv,
	StyledEditCoverPhotoButton,
} from "./CoverPhoto.styles";

interface CoverPhotoProps {
	userCoverUrl?: string;
}

const CoverPhoto = ({ userCoverUrl }: CoverPhotoProps) => {
	const { showText, fileInputRef, handleFileChange, handleUploadClick, isOwnProfile } =
		useCoverPhoto();

	return (
		<StyledContainer>
			{!!userCoverUrl && <StyledCoverPhoto src={userCoverUrl} alt="Cover Photo" />}
			<StyledDiv>
				<input
					type="file"
					accept="image/*"
					id="file-input"
					ref={fileInputRef}
					onChange={handleFileChange}
					hidden
				/>
				{isOwnProfile && (
					<StyledEditCoverPhotoButton
						text="Add Cover Photo"
						showText={showText}
						icon={mdiCamera}
						iconSize={0.8}
						iconColor="white"
						colorClass="overlay"
						onClick={handleUploadClick}
					/>
				)}
			</StyledDiv>
		</StyledContainer>
	);
};

export default CoverPhoto;
