import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";

interface useEditFormBioProps {
	handleCloseForm: () => void;
	initialValue: string | undefined;
}

const useEditFormBio = ({ handleCloseForm, initialValue }: useEditFormBioProps) => {
	const { id } = useParams();

	const { register, watch } = useForm({
		defaultValues: { bio: initialValue || "" },
	});
	const bioInput = watch("bio");
	const bioLengthRemaining = 101 - (bioInput?.length || 0);

	const { mutate } = useMutateCustom({
		queryUrl: `users/${id}/bio`,
		method: "PATCH",
		queryKey: ["user", id as string],
		updateDataKey: "user",
	});

	const handleSaveBio = () => {
		if (bioLengthRemaining < 0) return;

		mutate({ data: { bio: bioInput } }, { onSuccess: handleCloseForm });
	};

	return {
		handleSaveBio,
		register,
		bioLengthRemaining,
		bioInput,
	};
};

export default useEditFormBio;
