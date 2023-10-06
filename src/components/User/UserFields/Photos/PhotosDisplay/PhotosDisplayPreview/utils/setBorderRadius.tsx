const setBorderRadius = (index: number, total: number) => {
	const isSingleRow = total <= 3;
	const isLeftMost = index % 3 === 0;
	const isRightMost = (index + 1) % 3 === 0;
	let styles = "";

	if (isSingleRow) {
		if (isLeftMost)
			styles += "border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;";
		if (isRightMost)
			styles += "border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;";
	} else {
		if (index < 3) {
			if (isLeftMost) styles += "border-top-left-radius: 0.5rem;";
			if (isRightMost) styles += "border-top-right-radius: 0.5rem;";
		} else if (index >= total - 3) {
			if (isLeftMost) styles += "border-bottom-left-radius: 0.5rem;";
			if (isRightMost) styles += "border-bottom-right-radius: 0.5rem;";
		}
	}

	return styles;
};

export default setBorderRadius;
