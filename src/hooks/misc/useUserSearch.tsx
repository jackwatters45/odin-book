import { UseFormRegisterReturn, useForm } from "react-hook-form";
import useCurrentUser from "../auth/useCurrentUser";
import useSearch from "./useSearch";
import { UseQueryOptions } from "@tanstack/react-query";

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
}

const useUserSearch = ({
	urlEnding,
	options,
	includeEmpty = false,
	usersToExclude,
}: IUseUserSearch) => {
	const { currentUser } = useCurrentUser();

	const { register, watch } = useForm<UserSearchInput>();

	const registerSearchInput: RegisterSearchInput = register("search");

	const searchQuery = watch("search");
	const { searchResults: unfilteredSearchResults, isLoading } = useSearch<
		SearchJsonResponse,
		SearchResultsType
	>({
		searchQuery,
		queryKey: ["users", currentUser?._id, "search", urlEnding, searchQuery],
		queryUrl: `users/search/${urlEnding}`,
		includeEmpty,
		options: { staleTime: 60000, cacheTime: 60000, ...options },
	});

	const searchResults =
		usersToExclude && usersToExclude.length
			? unfilteredSearchResults?.filter(
					(user) => !usersToExclude?.some((u) => u._id === user._id),
			  )
			: unfilteredSearchResults;

	return {
		registerSearchInput,
		searchQuery,
		searchResults,
		isLoading,
	};
};

export default useUserSearch;
