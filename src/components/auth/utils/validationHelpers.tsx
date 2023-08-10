const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export const validateLength = (value: string) => {
	// If the value is an email, check against email length constraints
	if (isEmail(value)) {
		if (value.length < 5) {
			return "Email should be at least 5 characters long.";
		}
		if (value.length > 100) {
			return "Email should be less than 100 characters long.";
		}
	}
	// If the value is a number, check against number length constraints
	else if (!isNaN(Number(value))) {
		if (value.length < 10) {
			return "Number should be at least 10 digits long.";
		}
		if (value.length > 15) {
			return "Number should be less than 15 digits long.";
		}
	}
	// If neither an email nor a number
	else {
		return "Please enter a valid email or number.";
	}

	return true; // If all validations pass
};

export const passwordPattern =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?()])[A-Za-z\d!@#$%^&*?()]{8,}$/;

export const validatePassword = (value: string) => {
	// Check for minimum length
	if (value.length < 8) {
		return "Password should be at least 8 characters long.";
	}

	// check for maximum length
	if (value.length > 50) {
		return "Password should be at most 50 characters long.";
	}

	// Check for the required pattern
	if (!passwordPattern.test(value)) {
		return "Password must contain at least one uppercase letter, one lowercase letter, one special character, one number, and be at least 8 characters long";
	}

	return true; // If all validations pass
};

export const validateAge = (value: string) => {
	const birthDate = new Date(value);
	const currentDate = new Date();

	// Calculate the difference in years
	let age = currentDate.getFullYear() - birthDate.getFullYear();
	const m = currentDate.getMonth() - birthDate.getMonth();

	// Adjust the age if the birthday for the current year has not yet occurred
	if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
		age--;
	}

	if (age < 13) {
		return "You must be at least 13 years old to register.";
	}

	return true; // If validation passes
};
