import { useMatch } from "react-router";

const useFriendPageType = () => {
	const isMutualFriends = !!useMatch("/user/:username/friends/mutual");
	const isCollegeFriends = !!useMatch("/user/:username/friends/college");
	const isCurrentCityFriends = !!useMatch("/user/:username/friends/current-city");
	const isHometownFriends = !!useMatch("/user/:username/friends/hometown");

	if (isMutualFriends) {
		return "mutual";
	} else if (isCollegeFriends) {
		return "college";
	} else if (isCurrentCityFriends) {
		return "current-city";
	} else if (isHometownFriends) {
		return "hometown";
	} else {
		return "all";
	}
};

export default useFriendPageType;
