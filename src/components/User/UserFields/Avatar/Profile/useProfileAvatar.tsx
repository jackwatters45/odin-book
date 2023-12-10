import useFileUpload from "@/hooks/misc/useUploadFile";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";

const useProfileAvatar = () => {
	const { fileInputRef, handleUploadClick, handleFileChange } = useFileUpload(
		"avatar-photo",
		"avatarUrl",
	);

	const { isOwnProfile } = useProfileStatus();

	return {
		fileInputRef,
		handleUploadClick,
		handleFileChange,
		isOwnProfile,
	};
};

export default useProfileAvatar;
