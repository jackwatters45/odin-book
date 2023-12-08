import { debounce } from "lodash";
import { useEffect } from "react";

import useQueryCustom, { IQueryCustomProps } from "../reactQuery/useQueryCustom";
import { UseQueryOptions } from "@tanstack/react-query";

export interface UseSearchProps<T, U> {
	searchQuery: string | undefined;
	excludedUsersParam?: string;
	queryKey: IQueryCustomProps<T, U>["queryKey"];
	queryUrl: IQueryCustomProps<T, U>["queryUrl"];
	transformData?: IQueryCustomProps<T, U>["transformData"];
	includeEmpty?: boolean;
	options?: UseQueryOptions<U>;
}

const useSearch = <T, U>({
	searchQuery,
	excludedUsersParam,
	queryKey,
	queryUrl,
	transformData,
	includeEmpty = false,
	options,
}: UseSearchProps<T, U>) => {
	const {
		data: searchResults,
		refetch,
		isLoading,
		...rest
	} = useQueryCustom<T, U>({
		queryUrl: `${queryUrl}?q=${searchQuery}&exclude=${excludedUsersParam}`,
		queryKey,
		transformData,
		options: { ...options, enabled: false },
	});

	useEffect(() => {
		const debouncedRefetch = debounce(() => refetch(), 300);
		if (searchQuery || includeEmpty) debouncedRefetch();
		return debouncedRefetch.cancel;
	}, [searchQuery, includeEmpty, refetch, excludedUsersParam]);

	return { searchResults, isLoading, ...rest };
};

export default useSearch;
