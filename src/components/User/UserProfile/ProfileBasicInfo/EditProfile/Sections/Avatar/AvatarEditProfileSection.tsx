import { defaultUserAvatar } from "@/config/globals";
import { StyledAvatarImage } from "../../../ProfileAvatar/ProfileAvatar.styles";
import { ContentDiv } from "../../EditProfile.styles";
import useProfileAvatar from "../../../ProfileAvatar/useProfileAvatar";

interface AvatarEditProfileSectionProps {
	avatarUrl?: string;
}

const AvatarEditProfileSection = ({ avatarUrl }: AvatarEditProfileSectionProps) => {
	const {
		fileInputRef: avatarFileInputRef,
		handleFileChange: handleAvatarFileChange,
		handleUploadClick: handleAvatarUploadClick,
	} = useProfileAvatar();

	return (
		<ContentDiv>
			<div>
				<h2>Profile picture</h2>
				<button onClick={handleAvatarUploadClick}>{avatarUrl ? "Edit" : "Add"}</button>
				<input
					type="file"
					accept="image/*"
					id="file-input"
					ref={avatarFileInputRef}
					onChange={handleAvatarFileChange}
					hidden
				/>
			</div>
			<div>
				<StyledAvatarImage src={avatarUrl || defaultUserAvatar} alt="Profile" />
			</div>
		</ContentDiv>
	);
};

export default AvatarEditProfileSection;
