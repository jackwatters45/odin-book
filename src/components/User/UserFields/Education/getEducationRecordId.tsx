import { EducationData } from "@/types/IUser";

const getEducationRecordId = ({ school, startDate, endDate }: EducationData) => {
	return `${school}-${startDate}-${endDate}`;
};

export default getEducationRecordId;
