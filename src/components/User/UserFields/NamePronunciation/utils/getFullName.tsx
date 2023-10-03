const getFullName = (firstName: string | undefined, lastName: string | undefined) => {
	if (firstName && lastName) {
		return `${firstName} ${lastName}`;
	} else if (firstName) {
		return firstName;
	} else if (lastName) {
		return lastName;
	} else {
		return "";
	}
};

export default getFullName;
