import { useOutletContext } from "react-router";
import { useEffect, useRef, useState } from "react";

import { IUser } from "@/types/IUser";

const useUserPosts = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const handleResize = () => setWindowHeight(window.innerHeight);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const leftSidebarRef = useRef<HTMLDivElement>(null);
	const getTop = () => {
		const leftColumnHeight = leftSidebarRef.current?.offsetHeight ?? windowHeight;

		const isColumnBiggerThanScreen = leftColumnHeight > windowHeight;

		return isColumnBiggerThanScreen
			? `calc(${windowHeight - leftColumnHeight}px - 1rem)`
			: "1rem";
	};
	const top = getTop();

	return { user, leftSidebarRef, top };
};

export default useUserPosts;
