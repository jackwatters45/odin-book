import { ChangeEvent, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { feelings } from "../Constants/feelingOptions";
import { CreatePostFormValues } from "../../../types/CreatePostTypes";

interface UseCreatePostFeelingFormProps {
	closeForm: () => void;
	setValue: UseFormSetValue<CreatePostFormValues>;
}

const useCreatePostFeelingForm = ({
	closeForm,
	setValue,
}: UseCreatePostFeelingFormProps) => {
	const handleClick = (feeling: string) => {
		setValue("feeling", feeling);
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
