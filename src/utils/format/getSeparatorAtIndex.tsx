const getSeparatorAtIndex = (index: number, length: number) => {
	if (index === length - 1) return "";
	if (index === length - 2) return " and ";
	return ", ";
};

export default getSeparatorAtIndex;
