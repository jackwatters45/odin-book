import { useOutletContext } from "react-router";

import useProfileStatus from "@/hooks/useIsOwnProfile";
import getCurrentCity from "@/components/User/UserFields/PlacesLived/utils/getCurrentCity";
import getHometown from "@/components/User/UserFields/PlacesLived/utils/getHometown";
import { IUser } from "@/types/IUser";
import { sortArrByStartEndDates } from "@/utils/dateHelpers";
import useAboutFieldVisibility from "@/hooks/useAboutFieldVisibility";

const useUserAboutPlacesLived = () => {
	const { isOwnProfile } = useProfileStatus();

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

	const showPlacesLived =
		useAboutFieldVisibility()(audienceSettings.placesLived) &&
		!!sortedPlacesLived &&
		sortedPlacesLived.length > 0;

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
		showPlacesLived,
	};
};

export default useUserAboutPlacesLived;
