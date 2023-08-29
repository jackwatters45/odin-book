import { mdiCamera } from "@mdi/js";

import { IconCircleBackground } from "../../../../Nav/Nav.styles";
import useProfileAvatar from "./useProfileAvatar";
import {
	StyledAvatarContainer,
	StyledAvatarImageBackground,
	StyledHoverableDiv,
	StyledAvatarImage,
	StyledAvatarEditButton,
} from "./ProfileAvatar.styles";
import renderFormErrors from "../../../../../utils/renderFormErrors";

interface ProfileAvatarProps {
	avatarUrl?: string;
}

const ProfileAvatar = ({ avatarUrl }: ProfileAvatarProps) => {
	const { fileInputRef, handleUploadClick, handleFileChange, error } = useProfileAvatar();

	return (
		<StyledAvatarContainer>
			<StyledAvatarImageBackground>
				<StyledHoverableDiv>
					<StyledAvatarImage src={avatarUrl} alt="User Profile" />
				</StyledHoverableDiv>
				<StyledAvatarEditButton onClick={handleUploadClick}>
					<input
						type="file"
						accept="image/*"
						id="file-input"
						ref={fileInputRef}
						onChange={handleFileChange}
						hidden
					/>
					<IconCircleBackground
						path={mdiCamera}
						size={1.5}
						color={"black"}
						background="grey"
					/>
				</StyledAvatarEditButton>
			</StyledAvatarImageBackground>
			{error && <span>{renderFormErrors(error)}</span>}
		</StyledAvatarContainer>
	);
};

export default ProfileAvatar;
