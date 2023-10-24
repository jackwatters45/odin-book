import { useParams } from "react-router";
import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";

interface useSaveHobbiesProps {
	unsavedValue: string[];
	closeDialog: () => void;
}

const useSaveHobbies = ({ unsavedValue, closeDialog }: useSaveHobbiesProps) => {
	const { id } = useParams();

	const { mutate } = useMutateCustom({
		queryUrl: `users/${id}/hobbies`,
		method: "PATCH",
		queryKey: ["user", id as string],
		updateDataKey: "user",
	});

	const handleSave = () => {
		mutate({ data: { hobbies: unsavedValue } }, { onSuccess: closeDialog });
	};

	return {
		handleSave,
	};
};

export default useSaveHobbies;
