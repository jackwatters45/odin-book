import { useParams } from "react-router";

import useFileUpload from "@/hooks/useUploadFile";

const useProfileAvatar = () => {
	const { id } = useParams();

	const { fileInputRef, handleUploadClick, handleFileChange } = useFileUpload({
		queryUrl: `users/${id}/profile-photo`,
		method: "PATCH",
		queryKey: ["user", id as string],
		updateDataKey: "user",
	});

	return {
		fileInputRef,
		handleUploadClick,
		handleFileChange,
	};
};

export default useProfileAvatar;