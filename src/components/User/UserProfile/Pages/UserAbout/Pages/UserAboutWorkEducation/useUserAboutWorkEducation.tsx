import { EducationData, IUser, WorkData } from "@/types/IUser";
import { sortArrByStartEndDates } from "@/utils/dateHelpers/sortByStartEndDates";
import { useOutletContext } from "react-router";

const useUserAboutWorkEducation = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const workContent = sortArrByStartEndDates<WorkData>(user?.work)?.map((workData) => ({
		audience: audienceSettings?.work?.[workData?._id] ?? "Public",
		values: workData,
	}));

	const sortedEducationHistory = sortArrByStartEndDates<EducationData>(user?.education);

	const filterEducationByType = (type: EducationData["type"]) =>
		sortedEducationHistory
			?.filter((educationData) => educationData.type === type)
			.map((educationData) => ({
				audience: audienceSettings?.education?.[educationData?._id] ?? "Public",
				values: educationData,
			}));

	const collegeContent = filterEducationByType("college");
	const highSchoolContent = filterEducationByType("high school");

	return {
		workContent,
		collegeContent,
		highSchoolContent,
	};
};

export default useUserAboutWorkEducation;
