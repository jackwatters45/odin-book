import { EducationData } from "@/types/IUser";

const formatEducationData = ({ type, school, fieldOfStudy }: EducationData) => {
	return type === "university"
		? `Studied ${fieldOfStudy} at ${school}`
		: `Went to ${school}`;
};

export default formatEducationData;
