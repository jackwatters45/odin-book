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

	const mostRecentWork = sortedWorkHistory?.[0];

	let mostRecentWorkAudience: AudienceStatusOptions = "Public";
	if (mostRecentWork?._id && audienceSettings.work) {
		mostRecentWorkAudience = audienceSettings.work[mostRecentWork._id] ?? "Public";
	}

	const pastCompany = sortedWorkHistory?.[1]?.company;

	const education = getMostRecentItemFromArr(user?.education);

	let educationAudience: AudienceStatusOptions = "Public";
	if (education?._id && audienceSettings.education) {
		educationAudience = audienceSettings.education[education._id] ?? "Public";
	}

	const currentCity = user?.placesLived?.find((place) => place.type === "current");
	const hometown = user?.placesLived?.find((place) => place.type === "hometown");

	const relationship = user?.relationshipStatus as IUser["relationshipStatus"];

	const phoneNumber = user?.phoneNumber;

	return {
		mostRecentWork,
		mostRecentWorkAudience,
		pastCompany,
		education,
		educationAudience,
		relationship,
		phoneNumber,
		currentCity,
		hometown,
		audienceSettings,
	};
};

export default useUserAboutOverview;
