import useMutateCustom from "@/hooks/useMutateCustom";
import { useParams } from "react-router";

interface UseBottomControlsParams {
	closeDialog: () => void;
	hobbiesValue: string[];
	initialHobbies: string[] | undefined;
}

const useBottomControls = ({
	closeDialog,
	hobbiesValue,
	initialHobbies,
}: UseBottomControlsParams) => {
	const { id } = useParams();

	const { mutate, isSuccess } = useMutateCustom({
		queryUrl: `users/${id}/hobbies`,
		method: "PATCH",
		queryKey: ["user", id as string],
		updateDataKey: "user",
	});

	const handleSaveHobbies = () => {
		mutate({ data: { hobbies: hobbiesValue } });
		if (isSuccess) closeDialog();
	};

	const isChanged =
		JSON.stringify(initialHobbies?.sort()) !== JSON.stringify(hobbiesValue.sort());

	return {
		handleSaveHobbies,
		isChanged,
	};
};

export default useBottomControls;
