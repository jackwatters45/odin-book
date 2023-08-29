import { ChangeEvent, useRef } from "react";
import useWindowWidth from "../../../../../hooks/useWindowWidth";
import useMutateCustom from "../../../../../hooks/useMutateCustom";
import { useParams } from "react-router";
import useError from "../../../../Errors/useError";

const useCoverPhoto = () => {
	const { id } = useParams();

	const { setError } = useError();

	const windowWidth = useWindowWidth();

	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleUploadClick = () => fileInputRef.current?.click();

	const { mutate } = useMutateCustom({
		queryUrl: `users/updateUser/${id}/cover-photo`,
		method: "POST",
		queryKey: "currentUser",
		onError: setError,
	});

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) mutate({ data: { file } });
	};

	return {
		showText: windowWidth > 899,
		fileInputRef,
		handleUploadClick,
		handleFileChange,
	};
};

export default useCoverPhoto;
