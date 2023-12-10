import useWindowWidth from "@/hooks/dom/useWindowWidth";
import useFileUpload from "@/hooks/misc/useUploadFile";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";

const useCoverPhoto = () => {
	const windowWidth = useWindowWidth();

	const { fileInputRef, handleUploadClick, handleFileChange } = useFileUpload(
		"cover-photo",
		"coverPhotoUrl",
	);

	const { isOwnProfile } = useProfileStatus();

	return {
		showText: windowWidth > 899,
		fileInputRef,
		handleUploadClick,
		handleFileChange,
		isOwnProfile,
	};
};

export default useCoverPhoto;
