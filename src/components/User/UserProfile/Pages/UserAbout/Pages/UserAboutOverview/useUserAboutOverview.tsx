import { useOutletContext } from "react-router";

import { IWork } from "@/components/User/UserFields/Work/types/WorkTypes";
import { IUser } from "@/types/IUser";
import {
	getMostRecentItemFromArr,
	sortArrByStartEndDates,
} from "@/utils/dateHelpers/sortByStartEndDates";

const useUserAboutOverview = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const sortedWorkHistory = sortArrByStartEndDates<IWork>(user?.work);

	const pastCompany = sortedWorkHistory?.[1]?.company;

	const mostRecentWork = sortedWorkHistory?.[0];
	const mostRecentWorkAudience = mostRecentWork?._id
		? audienceSettings.work?.[mostRecentWork._id] ?? "Friends"
		: "Friends";

	const education = getMostRecentItemFromArr(user?.education);

	const educationAudience = education?._id
		? audienceSettings.education?.[education._id] ?? "Friends"
		: "Friends";

	const currentCity = user?.placesLived?.find((place) => place.type === "current");

	const currentCityAudience = currentCity?._id
		? audienceSettings.placesLived?.[currentCity._id] ?? "Friends"
		: "Friends";

	const hometown = user?.placesLived?.find((place) => place.type === "hometown");
	const hometownAudience = hometown?._id
		? audienceSettings.placesLived?.[hometown._id] ?? "Friends"
		: "Friends";

	const relationship = user?.relationshipStatus as IUser["relationshipStatus"];
	const relationshipStatusAudience = audienceSettings?.relationshipStatus ?? "Friends";

	const phoneNumber = user?.phoneNumber;
	const phoneNumberAudience = audienceSettings?.phoneNumber ?? "Friends";

	return {
		mostRecentWork,
		mostRecentWorkAudience,
		pastCompany,
		education,
		educationAudience,
		currentCity,
		currentCityAudience,
		hometown,
		hometownAudience,
		relationship,
		relationshipStatusAudience,
		phoneNumber,
		phoneNumberAudience,
	};
};

export default useUserAboutOverview;
