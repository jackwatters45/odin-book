import { mdiCamera } from "@mdi/js";

import { IconCircleBackground } from "@/components/Nav/Nav.styles";
import useProfileAvatar from "./useProfileAvatar";
import {
	StyledAvatarContainer,
	StyledAvatarImageBackground,
	StyledHoverableDiv,
	StyledAvatarImage,
	StyledAvatarEditButton,
} from "./ProfileAvatar.styles";
import defaultUserAvatar from "../utils/defaultUserAvatar";

interface ProfileAvatarProps {
	avatarUrl?: string;
}

const ProfileAvatar = ({ avatarUrl }: ProfileAvatarProps) => {
	const { fileInputRef, handleUploadClick, handleFileChange } = useProfileAvatar();

	return (
		<StyledAvatarContainer>
			<StyledAvatarImageBackground>
				<StyledHoverableDiv>
					<StyledAvatarImage src={avatarUrl || defaultUserAvatar} alt="User Profile" />
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
						background={"#e4e6eb"}
					/>
				</StyledAvatarEditButton>
			</StyledAvatarImageBackground>
		</StyledAvatarContainer>
	);
};

export default ProfileAvatar;
