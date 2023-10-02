import { debounce } from "lodash";
import { useCallback, useEffect } from "react";

import useQueryCustom, { IQueryCustomProps } from "./useQueryCustom";
import { UseQueryOptions } from "@tanstack/react-query";

export interface UseSearchProps<T, U> {
	queryKey: IQueryCustomProps<T, U>["queryKey"];
	queryUrl: IQueryCustomProps<T, U>["queryUrl"];
	transformData?: IQueryCustomProps<T, U>["transformData"];
	options?: UseQueryOptions<U>;
	searchQuery: string | undefined;
}

const useSearch = <T, U>({
	searchQuery,
	queryKey,
	queryUrl,
	transformData,
	options,
}: UseSearchProps<T, U>) => {
	const {
		data: searchResults,
		refetch,
		isLoading,
	} = useQueryCustom<T, U>({
		queryUrl: `${queryUrl}?q=${searchQuery}`,
		queryKey,
		transformData,
		options: { ...options, enabled: false },
	});

	const debouncedRefetch = debounce(() => {
		refetch();
	}, 300);

	const refetchDebounced = useCallback(() => {
		debouncedRefetch();
	}, [debouncedRefetch]);

	useEffect(() => {
		if (searchQuery) refetchDebounced();
		return debouncedRefetch.cancel;
	}, [searchQuery, refetchDebounced, debouncedRefetch]);

	return { searchResults, isLoading };
};

export default useSearch;
