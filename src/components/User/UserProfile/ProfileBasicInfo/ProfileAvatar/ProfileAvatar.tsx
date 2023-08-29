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

interface ProfileAvatarProps {
	avatarUrl?: string;
}

const ProfileAvatar = ({ avatarUrl }: ProfileAvatarProps) => {
	const { fileInputRef, handleUploadClick, handleFileChange } = useProfileAvatar();

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
		</StyledAvatarContainer>
	);
};

export default ProfileAvatar;
