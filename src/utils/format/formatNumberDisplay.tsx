const formatNumberDisplay = (num: number): string => {
	if (num < 1000) {
		return num.toString();
	} else if (num < 1000000) {
		if (num % 1000 === 0) {
			return `${Math.floor(num / 1000)}K`;
		} else {
			return `${(num / 1000).toFixed(1).replace(/[.,]0$/, "")}K`;
		}
	} else {
		if (num % 1000000 === 0) {
			return `${Math.floor(num / 1000000)}M`;
		} else {
			return `${(num / 1000000).toFixed(1).replace(/[.,]0$/, "")}M`;
		}
	}
};

export default formatNumberDisplay;
