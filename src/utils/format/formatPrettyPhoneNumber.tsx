const formatPhoneNumber = (phoneNumberString: string) => {
	if (phoneNumberString.length === 11) {
		if (phoneNumberString.charAt(0) !== "1") return phoneNumberString;
		const areaCode = phoneNumberString.substring(1, 4);
		const centralOfficeCode = phoneNumberString.substring(4, 7);
		const lineNumber = phoneNumberString.substring(7, 11);
		return `+1 (${areaCode}) ${centralOfficeCode}-${lineNumber}`;
	} else if (phoneNumberString.length === 10) {
		const areaCode = phoneNumberString.substring(0, 3);
		const centralOfficeCode = phoneNumberString.substring(3, 6);
		const lineNumber = phoneNumberString.substring(6, 10);
		return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
	}

	return phoneNumberString;
};

export default formatPhoneNumber;
