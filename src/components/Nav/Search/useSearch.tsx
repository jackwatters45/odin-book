import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

type IResult = { _id: string; fullName: string; avatarUrl: string; isFriend: boolean };

type FnReturnType = IResult[];

const useSearch = () => {
	const currentUser = useCurrentUserCached();

	const { register, watch } = useForm({
		defaultValues: { search: "" },
	});

	const searchQuery = watch("search");

	const [searchResults, setSearchResults] = useState<FnReturnType>([]);

	const { data, refetch } = useQueryCustom<FnReturnType>({
		queryKey: ["searchResults", searchQuery],
		queryUrl: `users/search?q=${searchQuery}`,
		options: { enabled: false },
	});

	useEffect(() => {
		if (data) setSearchResults(data);
	}, [data]);

	useEffect(() => {
		if (!searchQuery) {
			refetch();
		} else {
			const debounceTimeout = setTimeout(refetch, 300);
			return () => clearTimeout(debounceTimeout);
		}
	}, [searchQuery, refetch]);

	const currentUserId = currentUser?._id;

	return {
		register,
		searchResults,
		searchQuery,
		currentUserId,
	};
};

export default useSearch;
