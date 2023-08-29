import { ChangeEvent, useRef, useState } from "react";
import { useParams } from "react-router";
import useMutateCustom from "../../../../../hooks/useMutateCustom";
import { ValidationError } from "../../../../../../types/ErrorInterfaces";

const useProfileAvatar = () => {
	const { id } = useParams();

	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleUploadClick = () => fileInputRef.current?.click();

	const [error, setError] = useState<string | ValidationError[]>("");

	const { mutate } = useMutateCustom({
		queryUrl: `users/updateUser/${id}/profile-photo`,
		method: "POST",
		queryKey: "currentUser",
		onError: setError,
	});

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) mutate({ data: { file } });
	};

	return {
		fileInputRef,
		handleUploadClick,
		handleFileChange,
		error,
	};
};

export default useProfileAvatar;
