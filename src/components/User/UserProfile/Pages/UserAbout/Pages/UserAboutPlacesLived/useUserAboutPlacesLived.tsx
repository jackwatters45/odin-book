import { useOutletContext } from "react-router";

import useIsOwnProfile from "@/hooks/useIsOwnProfile";
import getCurrentCity from "@/components/User/UserFields/PlacesLived/utils/getCurrentCity";
import getHometown from "@/components/User/UserFields/PlacesLived/utils/getHometown";
import { IUser } from "@/types/IUser";
import { sortArrByStartEndDates } from "@/utils/dateHelpers";

const useUserAboutPlacesLived = () => {
	const isOwnProfile = useIsOwnProfile();

	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const hometown = getHometown(user?.placesLived);
	const isHometown = !!hometown;
	const homeTownAudience = isHometown
		? audienceSettings?.placesLived?.[hometown._id] ?? "Public"
		: "Public";

	const currentCity = getCurrentCity(user?.placesLived);
	const isCurrentCity = !!currentCity;
	const currentCityAudience = isCurrentCity
		? audienceSettings?.placesLived?.[currentCity?._id] ?? "Public"
		: "Public";

	const sortedPlacesLived = sortArrByStartEndDates(
		user?.placesLived?.filter(
			(place) => place.type !== "current" && place.type !== "hometown",
		),
	);

	return {
		isOwnProfile,
		hometown,
		isHometown,
		homeTownAudience,
		currentCity,
		isCurrentCity,
		currentCityAudience,
		audienceSettings,
		sortedPlacesLived,
	};
};

export default useUserAboutPlacesLived;
