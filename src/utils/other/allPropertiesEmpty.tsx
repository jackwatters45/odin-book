const allPropertiesEmpty = (obj: object): boolean => {
	return Object.values(obj).every((value) => value === "");
};

export default allPropertiesEmpty;
