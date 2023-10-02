export type SearchResult = { _id: string; avatarUrl: string; fullName: string };

export type SearchJsonResponse = {
	users: SearchResult[];
};

export type SearchResultsType = SearchResult[];
