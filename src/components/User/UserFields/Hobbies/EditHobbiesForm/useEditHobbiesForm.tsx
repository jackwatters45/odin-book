import { useState } from "react";

interface UseEditHobbiesFormProps {
	hobbiesValue: string[];
}

const useEditHobbiesForm = ({ hobbiesValue }: UseEditHobbiesFormProps) => {
	const [isViewMore, setIsViewMore] = useState(false);
	const handleClickViewMore = () => setIsViewMore(true);

	const isHobbies = (hobbiesValue && hobbiesValue.length > 0) || false;

	return {
		isViewMore,
		handleClickViewMore,
		isHobbies,
	};
};

export default useEditHobbiesForm;
