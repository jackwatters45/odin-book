import { ChangeEvent, useRef } from "react";
import useMutateCustom from "./useMutateCustom";

interface Props {
	queryUrl: string;
	queryKey: string[];
	method: "POST" | "PATCH" | "PUT";
	updateDataKey: string;
}

const useFileUpload = ({ queryUrl, queryKey, method, updateDataKey }: Props) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleUploadClick = () => fileInputRef.current?.click();

	const { mutate } = useMutateCustom({
		queryUrl,
		method,
		queryKey,
		updateDataKey,
	});

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const formData = new FormData();
			formData.append("file", file);

			mutate({ data: formData });
			event.target.value = "";
		}
	};

	return {
		fileInputRef,
		handleUploadClick,
		handleFileChange,
	};
};

export default useFileUpload;
