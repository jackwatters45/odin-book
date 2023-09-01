import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import useMutateCustom from "@/hooks/useMutateCustom";

const useBioEditProfileSection = () => {
	const { id } = useParams();

	const { register, watch, reset } = useForm();
	const bioInput = watch("bio");
	const bioLengthRemaining = 101 - (bioInput?.length || 0);

	const [isEditing, setIsEditing] = useState(false);
	const handleClickButton = () => {
		if (isEditing) reset();
		setIsEditing((prev) => !prev);
	};

	const { mutate, isSuccess } = useMutateCustom({
		queryUrl: `users/${id}/bio`,
		method: "PATCH",
		queryKey: ["user", id as string],
		updateDataKey: "user",
	});

	const handleSaveBio = () => {
		if (bioLengthRemaining < 0) return;

		mutate({ data: { bio: bioInput } });
		if (isSuccess) setIsEditing(false);
	};

	return {
		isEditing,
		handleClickButton,
		register,
		bioLengthRemaining,
		bioInput,
		handleSaveBio,
	};
};

export default useBioEditProfileSection;
