import { useEffect } from "react";
import { useForm } from "react-hook-form";

import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";

// TODO
type IResult = { id: string };

type JsonResponse = {
	results: IResult[];
};

type FnReturnType = IResult[];

// TODO implement search route
const useSearch = () => {
	const { register, watch } = useForm();
	const searchQuery = watch("search");

	const { data, refetch } = useQueryCustom<JsonResponse, FnReturnType>({
		queryKey: ["searchResults", searchQuery],
		queryUrl: `search?q=${searchQuery}`,
		transformData: (data) => data.results,
		options: {
			enabled: false,
		},
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
