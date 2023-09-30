const displayLanguages = (languages: string[] | undefined): string => {
	if (!languages || languages.length === 0) return "";
	if (languages.length === 1) return languages[0];
	if (languages.length === 2) return `${languages[0]} and ${languages[1]}`;

	return `${languages.slice(0, -1).join(", ")} and ${languages[languages.length - 1]}`;
};

export default displayLanguages;
