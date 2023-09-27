import { WorkData } from "@/types/IUser";

interface FormatWorkData {
	work: WorkData | undefined;

	includeCompany?: boolean;
	includePosition?: boolean;
}

const formatWorkData = ({
	work,
	includeCompany = true,
	includePosition = true,
}: FormatWorkData) => {
	if (!work) return "";

	const { position, endDate, company } = work;

	let text = "";
	if (position && includePosition && endDate) {
		text = `Former ${position} at`;
	} else if (position && includePosition) {
		text = `${position} at`;
	} else if (endDate) {
		text = "Worked at";
	} else {
		text = "Works at";
	}

	return includeCompany ? `${text} ${company}` : text;
};

export default formatWorkData;
