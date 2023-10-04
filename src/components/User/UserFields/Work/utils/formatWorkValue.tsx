import { IWork } from "../types/WorkTypes";

interface FormatWorkData {
	work: IWork | undefined;

	includeCompany?: boolean;
	includePosition?: boolean;
}

const formatWorkData = ({
	work,
	includeCompany = true,
	includePosition = true,
}: FormatWorkData) => {
	if (!work) return "";

	const { position, current, company } = work;

	let text = "";
	if (position && includePosition && !current) {
		text = `Former ${position} at`;
	} else if (position && includePosition) {
		text = `${position} at`;
	} else if (!current) {
		text = "Worked at";
	} else {
		text = "Works at";
	}

	return includeCompany ? `${text} ${company}` : text;
};

export default formatWorkData;
