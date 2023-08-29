import { mdiCamera } from "@mdi/js";
import Icon from "@mdi/react";

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
	const { showText, fileInputRef, handleFileChange, handleUploadClick } = useCoverPhoto();

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
				<StyledEditCoverPhotoButton onClick={handleUploadClick}>
					<Icon path={mdiCamera} size={0.8} />
					{showText && "Add Cover Photo"}
				</StyledEditCoverPhotoButton>
			</StyledDiv>
		</StyledContainer>
	);
};

export default CoverPhoto;
