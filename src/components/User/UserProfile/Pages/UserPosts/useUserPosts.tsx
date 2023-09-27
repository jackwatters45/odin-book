import { useOutletContext } from "react-router";
import { useRef } from "react";

import { IUser } from "@/types/IUser";

const useUserPosts = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const leftSidebarRef = useRef<HTMLDivElement>(null);
	const getTop = () => {
		const viewportHeight = window.innerHeight;
		const leftColumnHeight = leftSidebarRef.current?.offsetHeight ?? viewportHeight;
		return `calc(${viewportHeight - leftColumnHeight}px - 1rem)`;
	};
	const top = getTop();

	return { user, leftSidebarRef, top };
};

export default useUserPosts;
