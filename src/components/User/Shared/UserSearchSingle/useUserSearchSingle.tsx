import { isEqual } from "lodash";
import { UseQueryOptions } from "@tanstack/react-query";

import { SearchResultsType } from "./types/SearchResults";
import { DefaultUserSearch } from "./types/DefaultUserSearch";
import useUserSearch from "@/hooks/useUserSearch";
import {
	AudienceStatusOptions,
	FormFieldsWithAudience,
} from "@/types/AudienceSettingsTypes";

interface IUseUserSearch<T> {
	audience: AudienceStatusOptions;
	initialValues: T | undefined;
	formValues: FormFieldsWithAudience<DefaultUserSearch>;
	urlEnding: "friends" | "all" | "friends-not-family";
	options?: UseQueryOptions<SearchResultsType>;
}

const useUserSearchSingle = <T,>({
	audience,
	initialValues,
	formValues,
	urlEnding,
	options,
}: IUseUserSearch<T>) => {
	// const { currentUser } = useCurrentUser();

	// const searchQuery = formValues.values?.search;
	// const { searchResults, isLoading } = useSearch<SearchJsonResponse, SearchResultsType>({
	// 	searchQuery,
	// 	queryKey: ["users", currentUser?._id, "search", urlEnding, searchQuery],
	// 	queryUrl: `users/search/${urlEnding}`,
	// 	transformData: (data) => data.users,
	// 	options: { staleTime: 60000, cacheTime: 60000, ...options },
	// });

	const { registerSearchInput, searchQuery, searchResults, isLoading } = useUserSearch({
		urlEnding,
		options,
	});

	const isChanged =
		!isEqual(formValues.values, initialValues) || audience !== formValues.audience;

	const searchFieldsExist = !!formValues.values?.search && !!formValues.values?.user;

	const isSearchValid = isChanged && searchFieldsExist;

	return {
		registerSearchInput,
		searchResults,
		searchQuery,
		isLoading,
		isSearchValid,
	};
};

export default useUserSearchSingle;
