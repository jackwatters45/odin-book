const setBorderRadius = (index: number, total: number) => {
	const rowSize = 3; // Define the number of items per row
	const isLeftMost = index % rowSize === 0;
	const isRightMost = (index + 1) % rowSize === 0 || index === total - 1;
	const isFirstRow = index < rowSize;
	const numRows = Math.ceil(total / rowSize);
	const currentRow = Math.floor(index / rowSize) + 1;
	const isLastRow = currentRow === numRows;

	let styles = "";

	if (isFirstRow) {
		if (isLeftMost) styles += "border-top-left-radius: 0.5rem; ";
		if (isRightMost) styles += "border-top-right-radius: 0.5rem; ";
	}

	if (isLastRow) {
		if (isLeftMost) styles += "border-bottom-left-radius: 0.5rem; ";
		if (isRightMost) styles += "border-bottom-right-radius: 0.5rem; ";
	}

	const includeBorderBottomRight =
		(index === total - 2 && total % rowSize === 1) ||
		(index === total - 3 && total % rowSize === 2);

	if (includeBorderBottomRight) styles += "border-bottom-right-radius: 0.5rem; ";

	return styles;
};

export default setBorderRadius;
