import useMutateCustom from "@/hooks/useMutateCustom";
import { useState } from "react";
import { useParams } from "react-router";

interface useSingleUserPropertyProps {
	categoryUrl: string | undefined;
	param: string | undefined;
}

const useSingleUserProperty = ({ categoryUrl, param }: useSingleUserPropertyProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleOpenForm = () => setIsEditing(true);
	const handleCloseForm = () => setIsEditing(false);

	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryUrl = param
		? `users/${userId}/${categoryUrl}/${param}`
		: `users/${userId}/${categoryUrl}`;

	const { mutate } = useMutateCustom({
		queryUrl: categoryUrl ? queryUrl : "",
		method: "DELETE",
		queryKey: ["user", userId],
		updateDataKey: "user",
	});

	const deleteMutation = () => mutate({});

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	};
};

export default useSingleUserProperty;
