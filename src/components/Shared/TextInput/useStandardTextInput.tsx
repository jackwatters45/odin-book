import { useEffect, useRef, useState } from "react";

const useStandardTextInput = () => {
	const [isAutofilled, setIsAutofilled] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const input = ref.current?.firstElementChild;
		const inputBackground = window.getComputedStyle(input as Element).backgroundColor;

		const autoFillBackground = "rgba(0, 0, 0, 0)";
		const altAutoFillBackground = "rgba(70, 90, 126, 0.4)";

		const isAutofilledOnMount =
			inputBackground === autoFillBackground || inputBackground === altAutoFillBackground;

		if (isAutofilledOnMount) setIsAutofilled(true);
	}, []);

	return { ref, isAutofilled };
};

export default useStandardTextInput;
