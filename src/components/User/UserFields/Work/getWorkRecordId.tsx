import { WorkData } from "@/types/IUser";

const getWorkRecordId = ({ company, position, startDate, endDate }: WorkData) => {
	return `${company}-${position}-${startDate}-${endDate}`;
};

export default getWorkRecordId;
