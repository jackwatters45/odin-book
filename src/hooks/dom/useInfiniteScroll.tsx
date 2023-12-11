/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteData } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

interface IUseInfiniteScroll<T extends any[]> {
	data: InfiniteData<T> | undefined;
	hasNextPage: boolean | undefined;
	fetchNextPage: () => void;
}
const useInfiniteScroll = <T extends any[]>({
	data,
	hasNextPage,
	fetchNextPage,
}: IUseInfiniteScroll<T>) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isLoadMore, setIsLoadMore] = useState(false);
	const triggerLoadMore = () => setIsLoadMore(true);

	useEffect(() => {
		const currentRef = ref.current;

		if (data?.pages && data.pages.length > 0 && ref.current) {
			const observer = new IntersectionObserver((entries) => {
				const entry = entries[0];
				setIsLoadMore(entry.isIntersecting);
			});

			if (currentRef) observer.observe(currentRef);

			return () => {
				if (currentRef) observer.unobserve(currentRef);
			};
		}
	}, [data?.pages]);

	useEffect(() => {
		if (!hasNextPage || !isLoadMore) return;

		fetchNextPage();
		setIsLoadMore(false);
	}, [isLoadMore, fetchNextPage, hasNextPage]);

	return { ref, triggerLoadMore };
};

export default useInfiniteScroll;
