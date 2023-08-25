import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type SearchResult = {
	fullName: string;
	avatarUrl: string;
	isFriend: boolean;
};

// TODO
const fetchSearchResults = (query: string): Promise<SearchResult[]> =>
	fetch(`https://api.example.com/search?q=${query}`).then((response) => response.json());

const useSearch = () => {
	const { register, watch } = useForm();
	const searchQuery = watch("search");

	const { data, refetch } = useQuery({
		queryKey: ["searchResults", searchQuery],
		queryFn: () => fetchSearchResults(searchQuery),
		enabled: false,
	});

	const debounce = setTimeout(() => {
		if (searchQuery) {
			refetch();
		}
	}, 300);

	useEffect(() => {
		return () => clearTimeout(debounce);
	}, [searchQuery, debounce]);

	return {
		register,
		data,
		searchQuery,
	};
};

export default useSearch;
