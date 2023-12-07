import { useParams } from "react-router";

import useWindowWidth from "@/hooks/dom/useWindowWidth";
import useFileUpload from "@/hooks/misc/useUploadFile";

const useCoverPhoto = () => {
	const windowWidth = useWindowWidth();

	const { id } = useParams();

	const { fileInputRef, handleUploadClick, handleFileChange } = useFileUpload({
		queryUrl: `users/${id}/cover-photo`,
		method: "PATCH",
		queryKey: ["user", id as string],
		updateDataKey: "user",
	});

	return {
		showText: windowWidth > 899,
		fileInputRef,
		handleUploadClick,
		handleFileChange,
	};
};

export default useCoverPhoto;
