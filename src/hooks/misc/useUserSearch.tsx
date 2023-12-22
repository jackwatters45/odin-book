import { UseFormRegisterReturn, useForm } from "react-hook-form";
import useSearch from "./useSearch";
import { UseQueryOptions } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useCurrentUserCached from "../auth/useCurrentUserCached";

export type UserSearchInput = { search: string };

export type UserSearchResult = { _id: string; avatarUrl: string; fullName: string };

export type SearchJsonResponse = {
	users: UserSearchResult[];
};

export type SearchResultsType = UserSearchResult[];

export type RegisterSearchInput = UseFormRegisterReturn<"search">;

interface IUseUserSearch {
	urlEnding: "friends" | "all" | "friends-not-family";
	options?: UseQueryOptions<SearchResultsType>;
	includeEmpty?: boolean;
	usersToExclude?: { _id: string }[];
	initialSearchValue?: string;
}

const useUserSearch = ({
	urlEnding,
	options,
	includeEmpty = false,
	usersToExclude,
	initialSearchValue = "",
}: IUseUserSearch) => {
	const currentUser = useCurrentUserCached();

	const {
		register,
		watch,
		setValue: setSearchValue,
	} = useForm<UserSearchInput>({
		defaultValues: { search: initialSearchValue },
	});

	const registerSearchInput: RegisterSearchInput = register("search");

	const searchQuery = watch("search");

	const excludedUsersParam = usersToExclude?.map((u) => u._id).join(",");

	const [searchResults, setSearchResults] = useState<SearchResultsType>([]);
	const {
		searchResults: searchResultsData,
		isLoading,
		...rest
	} = useSearch<SearchJsonResponse, SearchResultsType>({
		searchQuery,
		excludedUsersParam,
		queryKey: [
			"users",
			currentUser?._id,
			"search",
			urlEnding,
			searchQuery,
			excludedUsersParam,
		],
		queryUrl: `users/search/${urlEnding}`,
		includeEmpty,
		options: { staleTime: 60000, cacheTime: 60000, ...options },
	});

	useEffect(() => {
		if (!isLoading && searchResultsData) setSearchResults(searchResultsData);
	}, [searchResultsData, isLoading]);

	return {
		registerSearchInput,
		setSearchValue,
		searchQuery,
		searchResults,
		isLoading,
		...rest,
	};
};

export default useUserSearch;
