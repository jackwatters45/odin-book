const formatList = (list: string[] | undefined): string => {
	if (!list || list.length === 0) return "";
	if (list.length === 1) return list[0].toString();
	if (list.length === 2) return `${list[0]} and ${list[1]}`;

	return `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
};

export default formatList;
