import { useMatch } from "react-router";

import { FriendsQueryEndType } from "@/components/Friends/types/FriendsTypes";

const useFriendPageType = (): FriendsQueryEndType => {
	const isMutualFriends = !!useMatch("/user/:username/friends/mutual");
	const isMutualFriendsNested = !!useMatch("friends/:type/:username/friends/mutual");

	const isCollegeFriends = !!useMatch("/user/:username/friends/college");
	const isCollegeFriendsNested = !!useMatch("friends/:type/:username/friends/college");

	const isCurrentCityFriends = !!useMatch("/user/:username/friends/current-city");
	const isCurrentCityFriendsNested = !!useMatch(
		"friends/:type/:username/friends/current-city",
	);

	const isHometownFriends = !!useMatch("/user/:username/friends/hometown");
	const isHometownFriendsNested = !!useMatch("friends/:type/:username/friends/hometown");

	if (isMutualFriends || isMutualFriendsNested) {
		return "mutual";
	} else if (isCollegeFriends || isCollegeFriendsNested) {
		return "college";
	} else if (isCurrentCityFriends || isCurrentCityFriendsNested) {
		return "current-city";
	} else if (isHometownFriends || isHometownFriendsNested) {
		return "hometown";
	} else {
		return "all";
	}
};

export default useFriendPageType;
