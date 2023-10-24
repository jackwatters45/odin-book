import { debounce } from "lodash";
import { useCallback, useEffect } from "react";

import useQueryCustom, { IQueryCustomProps } from "./reactQuery/useQueryCustom";
import { UseQueryOptions } from "@tanstack/react-query";

export interface UseSearchProps<T, U> {
	searchQuery: string | undefined;
	queryKey: IQueryCustomProps<T, U>["queryKey"];
	queryUrl: IQueryCustomProps<T, U>["queryUrl"];
	transformData?: IQueryCustomProps<T, U>["transformData"];
	includeEmpty?: boolean;
	options?: UseQueryOptions<U>;
}

const useSearch = <T, U>({
	searchQuery,
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
		if (searchQuery || includeEmpty) refetchDebounced();
		return debouncedRefetch.cancel;
	}, [searchQuery, includeEmpty, refetchDebounced, debouncedRefetch]);

	return { searchResults, isLoading };
};

export default useSearch;
