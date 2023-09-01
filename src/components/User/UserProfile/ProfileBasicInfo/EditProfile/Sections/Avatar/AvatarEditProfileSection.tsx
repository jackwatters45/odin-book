import { defaultUserAvatar } from "@/config/globals";
import { StyledAvatarImage } from "../../../ProfileAvatar/ProfileAvatar.styles";
import { ContentDiv } from "../../EditProfile.styles";
import useProfileAvatar from "../../../ProfileAvatar/useProfileAvatar";
import EditProfileSectionHeader from "../../EditProfileSectionHeader";

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
			<EditProfileSectionHeader
				title="Profile photo"
				isData={!!avatarUrl}
				openDialog={handleAvatarUploadClick}
			>
				<input
					type="file"
					accept="image/*"
					id="file-input"
					ref={avatarFileInputRef}
					onChange={handleAvatarFileChange}
					hidden
				/>
			</EditProfileSectionHeader>
			<div>
				<StyledAvatarImage src={avatarUrl || defaultUserAvatar} alt="Profile" />
			</div>
		</ContentDiv>
	);
};

export default AvatarEditProfileSection;
