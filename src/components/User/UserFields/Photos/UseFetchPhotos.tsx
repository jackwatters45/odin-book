import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import { useParams } from "react-router";
import { apiBaseUrl } from "@/config/envVariables";
import { useInfiniteQuery } from "@tanstack/react-query";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";
import { PhotoDisplayFields } from "./types/PhotosTypes";

interface IFetchPhotos {
	queryEnd: "photos-of" | "photos-by";
	userId: string;
	limit?: number;
	pageParam?: number;
}

const DEFAULT_ITEMS_PER_PAGE = 12;

const fetchPhotos = async ({ queryEnd, userId, limit, pageParam = 0 }: IFetchPhotos) => {
	const res = await fetch(
		`${apiBaseUrl}/users/${userId}/friends/${queryEnd}/?page=${pageParam}
				${limit ? `&limit=${limit}` : ""}`,
		{
			method: "GET",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		},
	);

	if (!res.ok) throw new Error("Error fetching friends");
	return await res.json();
};

interface UseFetchPhotosProps {
	photosType: "photos-of" | "photos-by";
	limit?: number;
}

const UseFetchPhotos = ({ photosType: queryEnd, limit }: UseFetchPhotosProps) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const {
		data: unflattenedPhotos,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<PhotoDisplayFields[]>({
		queryKey: ["user", userId, "friends", queryEnd, limit],
		queryFn: ({ pageParam }) => fetchPhotos({ queryEnd, userId, limit, pageParam }),
		getNextPageParam: (lastPage, pages) => {
			return lastPage?.length < DEFAULT_ITEMS_PER_PAGE ? undefined : pages?.length;
		},
	});

	const photos = unflattenedPhotos?.pages.flat() ?? [];

	const { ref } = useInfiniteScroll<PhotoDisplayFields[]>({
		data: unflattenedPhotos,
		hasNextPage,
		fetchNextPage,
	});

	return { userId, photos, isLoading, ref, isFetchingNextPage, hasNextPage };
};

export default UseFetchPhotos;
