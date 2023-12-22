import { isEqual } from "lodash";
import { UseQueryOptions } from "@tanstack/react-query";

import { SearchResultsType } from "./types/SearchResults";
import { DefaultUserSearch } from "./types/DefaultUserSearch";
import useUserSearch from "@/hooks/misc/useUserSearch";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

interface IUseUserSearch<T> {
	audience: AudienceStatusOptions;
	initialValues: T | undefined;
	initialSearchValue: string | undefined;
	formValues: DefaultUserSearch;
	urlEnding: "friends" | "all" | "friends-not-family";
	options?: UseQueryOptions<SearchResultsType>;
}

const useUserSearchSingle = <T,>({
	audience,
	initialValues,
	initialSearchValue,
	formValues,
	urlEnding,
	options,
}: IUseUserSearch<T>) => {
	const useUserSearchFuncs = useUserSearch({
		urlEnding,
		options,
		initialSearchValue,
	});

	const isChanged =
		!isEqual(formValues, initialValues) || audience !== formValues.audience;

	const searchFieldsExist = !!formValues.search && !!formValues.user;

	const isSearchValid = isChanged && searchFieldsExist;

	return { ...useUserSearchFuncs, isSearchValid };
};

export default useUserSearchSingle;
