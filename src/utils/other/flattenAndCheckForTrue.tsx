function flattenAndCheckForTrueOrPublic<T>(inputObj: T) {
	for (const key in inputObj) {
		if (typeof inputObj[key] === "object") {
			if (flattenAndCheckForTrueOrPublic(inputObj[key])) {
				return true;
			}
		} else if (inputObj[key] === true || inputObj[key] === "Public") {
			return true;
		}
	}
	return false;
}

export default flattenAndCheckForTrueOrPublic;
