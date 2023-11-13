import { useLayoutEffect, useRef } from "react";

const useSearchInput = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	useLayoutEffect(() => {
		setTimeout(() => {
			if (inputRef.current) inputRef.current.focus();
		}, 0);
	}, []);

	return { inputRef };
};

export default useSearchInput;
