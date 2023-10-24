const allPropertiesEmpty = (obj: object | undefined): boolean => {
	if (!obj) return true;
	return Object.values(obj).every((value) => value === "");
};

export default allPropertiesEmpty;
