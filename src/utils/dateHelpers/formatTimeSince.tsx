const formatTimeSince = (dateString: string) => {
	const date = new Date(dateString);

	const now = new Date();
	const diffInSeconds = Math.abs((now.getTime() - date.getTime()) / 1000);

	if (diffInSeconds < 60) {
		// Less than a minute
		return "just now";
	} else if (diffInSeconds < 3600) {
		// Less than an hour
		const minutes = Math.floor(diffInSeconds / 60);
		return `${minutes}m`;
	} else if (diffInSeconds < 86400) {
		// Less than a day
		const hours = Math.floor(diffInSeconds / 3600);
		return `${hours}h`;
	} else if (diffInSeconds < 31536000) {
		// Less than a year
		const days = Math.floor(diffInSeconds / 86400);
		return `${days}d`;
	} else {
		// A year or more
		const years = Math.floor(diffInSeconds / 31536000);
		return `${years}y`;
	}
};

export default formatTimeSince;
