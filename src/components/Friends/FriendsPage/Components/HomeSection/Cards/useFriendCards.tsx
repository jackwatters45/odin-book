import { RefObject, useEffect, useRef } from "react";

interface UseFriendCardsProps {
	setItemsPerRow: ((num: number) => void) | undefined;
}

const useFriendCards = ({ setItemsPerRow }: UseFriendCardsProps) => {
	function calculateItemsPerRow(ref: RefObject<HTMLDivElement>) {
		if (!ref.current) return 0;

		const gridWidth = ref.current.offsetWidth;
		const gap = parseFloat(getComputedStyle(ref.current).gap);
		let itemWidth;

		if (window.innerWidth >= 2035) {
			itemWidth = 250;
		} else if (window.innerWidth >= 1835) {
			itemWidth = 225;
		} else if (window.innerWidth >= 1635) {
			itemWidth = 200;
		} else {
			itemWidth = 175;
		}

		const totalWidth = itemWidth + gap;
		return Math.floor(gridWidth / totalWidth);
	}

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleResize = () => {
			const itemsPerRow = calculateItemsPerRow(ref);

			if (itemsPerRow && setItemsPerRow) setItemsPerRow(itemsPerRow);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [setItemsPerRow]);

	return { ref };
};

export default useFriendCards;
