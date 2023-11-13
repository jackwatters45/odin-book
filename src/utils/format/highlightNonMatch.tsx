const highlightNonMatch = (fullName: string, query: string) => {
	const regex = new RegExp(`(${query})`, "gi");
	const parts = fullName.split(regex);

	return parts.map((part) => ({
		text: part,
		match: part.toLowerCase() === query.toLowerCase(),
	}));
};

export default highlightNonMatch;
