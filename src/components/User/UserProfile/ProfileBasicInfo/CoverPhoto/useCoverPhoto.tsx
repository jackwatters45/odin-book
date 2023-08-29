import { ChangeEvent, useRef, useState } from "react";
import useWindowWidth from "../../../../../hooks/useWindowWidth";
import useMutateCustom from "../../../../../hooks/useMutateCustom";
import { useParams } from "react-router";
import { ValidationError } from "../../../../../../types/ErrorInterfaces";

const useCoverPhoto = () => {
	const { id } = useParams();

	const windowWidth = useWindowWidth();

	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleUploadClick = () => fileInputRef.current?.click();

	const [error, setError] = useState<string | ValidationError[]>("");

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
		error,
	};
};

export default useCoverPhoto;
