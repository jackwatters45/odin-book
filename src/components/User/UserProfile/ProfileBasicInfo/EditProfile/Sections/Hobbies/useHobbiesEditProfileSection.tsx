import { useForm } from "react-hook-form";
import { useState } from "react";

import useDialog from "@/hooks/useDialog";

const useHobbiesEditProfileSection = (hobbies: string[] | undefined) => {
	const { ref, openDialog, closeDialog } = useDialog();

	const { register, watch, reset } = useForm({
		defaultValues: { hobbies: hobbies || [], search: "" },
	});

	const hobbiesValue = watch("hobbies");
	const searchValue = watch("search");

	const [isViewMore, setIsViewMore] = useState(false);
	const handleClickViewMore = () => setIsViewMore(true);

	const handleCancel = () => {
		closeDialog();
		reset();
		if (isViewMore) setIsViewMore(false);
	};

	const isHobbies = (hobbiesValue && hobbiesValue.length > 0) || false;

	return {
		ref,
		openDialog,
		handleCancel,
		closeDialog,
		register,
		hobbiesValue,
		isHobbies,
		isViewMore,
		handleClickViewMore,
		searchValue,
	};
};

export default useHobbiesEditProfileSection;
