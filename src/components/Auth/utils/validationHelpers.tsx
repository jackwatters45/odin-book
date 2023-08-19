import { parsePhoneNumberFromString } from "libphonenumber-js";

export const validateEmail = (email: string) => {
	if (!email) {
		return "Email address is required.";
	}

	if (email.length > 255) {
		return "Email address should be less than 255 characters.";
	}

	if (email.length < 5) {
		return "Email address should be at least 5 characters.";
	}

	if (email.startsWith(".") || email.endsWith(".")) {
		return "Email address should not start or end with a dot.";
	}

	if (email.includes("..")) {
		return "Email address should not have consecutive dots.";
	}

	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if (!emailPattern.test(email)) {
		return "Invalid email format.";
	}

	return true;
};

export const validatePhoneNumber = (phoneNumber: string) => {
	if (!phoneNumber) {
		return "Phone number is required.";
	}

	const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);

	if (!parsedPhoneNumber || !parsedPhoneNumber.isValid()) {
		return "Phone number is not valid.";
	}

	return true;
};

export const validateUsernameForReactHookForm = (value: string) => {
	const type = value.includes("@") ? "email" : "phoneNumber";

	return type === "email" ? validateEmail(value) : validatePhoneNumber(value);
};

export const validatePassword = (value: string) => {
	// Check for minimum length
	if (value.length < 8) {
		return "Password should be at least 8 characters long.";
	}

	// Check for maximum length
	if (value.length > 50) {
		return "Password should be at most 100 characters long.";
	}

	// Check for at least one lowercase letter
	if (!/[a-z]/.test(value)) {
		return "Password must contain at least one lowercase letter.";
	}

	// Check for at least one uppercase letter
	if (!/[A-Z]/.test(value)) {
		return "Password must contain at least one uppercase letter.";
	}

	// Check for at least one number
	if (!/\d/.test(value)) {
		return "Password must contain at least one number.";
	}

	// Check for at least one special character
	if (!/[!@#$%^&*?()]/.test(value)) {
		return "Password must contain at least one special character (e.g. !@#$%^&*?()).";
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
