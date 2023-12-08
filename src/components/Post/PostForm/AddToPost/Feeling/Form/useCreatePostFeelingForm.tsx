import { ChangeEvent, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { feelings } from "../Constants/feelingOptions";
import { PostFormValues } from "../../../types/PostFormTypes";

interface UseCreatePostFeelingFormProps {
	closeForm: () => void;
	setValue: UseFormSetValue<PostFormValues>;
	currentValue: string | undefined;
}

const useCreatePostFeelingForm = ({
	closeForm,
	setValue,
	currentValue,
}: UseCreatePostFeelingFormProps) => {
	const handleClick = (feeling: string) => {
		if (currentValue === feeling) setValue("feeling", "");
		else setValue("feeling", feeling);
		closeForm();
	};

	const [filteredFeelings, setFilteredFeelings] = useState(feelings);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value.toLowerCase();

		const filtered = feelings.filter((feeling) =>
			feeling.name.toLowerCase().includes(searchValue),
		);
		setFilteredFeelings(filtered);
	};

	return { filteredFeelings, handleClick, handleSearch };
};

export default useCreatePostFeelingForm;
