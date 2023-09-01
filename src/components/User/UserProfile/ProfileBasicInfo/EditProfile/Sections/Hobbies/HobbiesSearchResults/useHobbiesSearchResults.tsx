import { hobbiesBank } from "@/config/globals";

interface UseHobbiesSearchResultsProps {
	searchValue: string;
	hobbiesValue: string[];
}

const useHobbiesSearchResults = ({
	searchValue,
	hobbiesValue,
}: UseHobbiesSearchResultsProps) => {
	const filteredItems = hobbiesBank.filter((hobby) => {
		return (
			hobby.name.toLowerCase().includes(searchValue.toLowerCase()) &&
			!hobbiesValue?.includes(hobby.name)
		);
	});

	return { filteredItems };
};

export default useHobbiesSearchResults;
