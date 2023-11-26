import { useMatch } from "react-router";
import useContainerWidth from "../context/useContainerWidth";

const useProfileNav = () => {
	const isRoot = !!useMatch("/user/:id/");
	const isAbout = !!useMatch("/user/:id/about/*");
	const isFriends = !!useMatch("/user/:id/friends/*");
	const isPhotos = !!useMatch("/user/:id/photos/*");

	const containerWidth = useContainerWidth();

	return {
		isRoot,
		isAbout,
		isFriends,
		isPhotos,
		containerWidth,
	};
};

export default useProfileNav;
