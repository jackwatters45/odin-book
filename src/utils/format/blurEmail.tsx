const blurEmail = (email: string) => {
	if (!email || email.length < 5 || !email.includes("@")) {
		return email[0] + "******";
	}

	const [username, domain] = email.split("@");

	const blurredUsername = username[0] + "***";
	const blurredDomain = "*".repeat(Math.min(domain.length, 5));

	return `${blurredUsername}@${blurredDomain}`;
};

export default blurEmail;
