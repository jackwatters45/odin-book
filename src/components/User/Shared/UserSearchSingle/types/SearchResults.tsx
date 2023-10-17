export type UserSearchResult = { _id: string; avatarUrl: string; fullName: string };

export type SearchJsonResponse = {
	users: UserSearchResult[];
};

export type SearchResultsType = UserSearchResult[];
