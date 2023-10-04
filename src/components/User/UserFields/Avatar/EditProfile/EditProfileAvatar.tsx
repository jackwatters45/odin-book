import { StyledAvatarImage } from "../Profile/ProfileAvatar.styles";
import { ContentDiv } from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfile.styles";
import useProfileAvatar from "../Profile/useProfileAvatar";
import EditProfileSectionHeader from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfileSectionHeader";
import defaultUserAvatar from "../utils/defaultUserAvatar";

interface EditProfileAvatarProps {
	avatarUrl?: string;
}

const EditProfileAvatar = ({ avatarUrl }: EditProfileAvatarProps) => {
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

export default EditProfileAvatar;
