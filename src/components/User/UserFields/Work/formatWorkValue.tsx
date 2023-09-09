import { WorkData } from "@/types/IUser";

const formatWorkData = ({ position, endDate, company }: WorkData) => {
	if (position && endDate) {
		return `Former ${position} at ${company}`;
	} else if (position) {
		return `${position} at ${company}`;
	} else if (endDate) {
		return `Worked at ${company}`;
	} else {
		return `Works at ${company}`;
	}
};

export default formatWorkData;
