import { useMatch } from "react-router";

const useFriendPageType = () => {
	const isMutualFriends = !!useMatch("/user/:username/friends/mutual");
	const isCollegeFriends = !!useMatch("/user/:username/friends/college");
	const isCurrentCityFriends = !!useMatch("/user/:username/friends/current-city");
	const isHometownFriends = !!useMatch("/user/:username/friends/hometown");

	if (isMutualFriends) {
		return "MUTUAL";
	} else if (isCollegeFriends) {
		return "COLLEGE";
	} else if (isCurrentCityFriends) {
		return "CURRENT_CITY";
	} else if (isHometownFriends) {
		return "HOMETOWN";
	} else {
		return "ALL";
	}
};

export default useFriendPageType;
