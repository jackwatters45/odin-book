import { useForm } from "react-hook-form";

import useDialog from "@/hooks/useDialog";
import { useEffect } from "react";

const useHobbies = (hobbies: string[] | undefined) => {
	const { register, watch, reset } = useForm({
		defaultValues: { hobbies: hobbies || [], search: "" },
	});

	useEffect(() => {
		reset({ hobbies: hobbies || [], search: watch("search") });
	}, [hobbies, reset, watch]);

	const { ref, openDialog, closeDialog } = useDialog({ reset });

	const hobbiesValue = watch("hobbies");
	const searchValue = watch("search");

	const isHobbies = (hobbiesValue && hobbiesValue.length > 0) || false;

	return {
		ref,
		openDialog,
		closeDialog,
		register,
		hobbiesValue,
		isHobbies,
		searchValue,
	};
};

export default useHobbies;
