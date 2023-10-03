import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { IUser, WorkData } from "@/types/IUser";
import {
	getMostRecentItemFromArr,
	sortArrByStartEndDates,
} from "@/utils/dateHelpers/sortByStartEndDates";
import { useOutletContext } from "react-router";

const useUserAboutOverview = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const sortedWorkHistory = sortArrByStartEndDates<WorkData>(user?.work);

	const pastCompany = sortedWorkHistory?.[1]?.company;

	const mostRecentWork = sortedWorkHistory?.[0];
	let mostRecentWorkAudience: AudienceStatusOptions = "Public";
	if (mostRecentWork?._id && audienceSettings.work) {
		mostRecentWorkAudience = audienceSettings.work[mostRecentWork._id] ?? "Public";
	}

	const education = getMostRecentItemFromArr(user?.education);

	let educationAudience: AudienceStatusOptions = "Public";
	if (education?._id && audienceSettings.education) {
		educationAudience = audienceSettings.education[education._id] ?? "Public";
	}

	const currentCity = user?.placesLived?.find((place) => place.type === "current");
	const currentCityAudience = currentCity?._id
		? audienceSettings.placesLived[currentCity._id]
		: "Friends";

	const hometown = user?.placesLived?.find((place) => place.type === "hometown");
	const hometownAudience = hometown?._id
		? audienceSettings.placesLived[hometown._id]
		: "Friends";

	const relationship = user?.relationshipStatus as IUser["relationshipStatus"];
	const relationshipStatusAudience = audienceSettings.relationshipStatus;

	const phoneNumber = user?.phoneNumber;
	const phoneNumberAudience = audienceSettings.phoneNumber;

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
