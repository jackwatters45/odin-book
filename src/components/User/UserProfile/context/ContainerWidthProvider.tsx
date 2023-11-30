import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

import ContainerWidthContext from "./ContainerWidthContext";

interface ContainerWidthProviderProps {
	children: ReactNode;
}

const ContainerWidthProvider = ({ children }: ContainerWidthProviderProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [containerWidth, setContainerWidth] = useState(0);

	useLayoutEffect(() => {
		const container = containerRef.current;
		if (container) setContainerWidth(container.offsetWidth);
	}, []);

	useEffect(() => {
		const container = containerRef.current;
		const handleResize = () => {
			if (container) setContainerWidth(container.offsetWidth);
		};

		const resizeObserver = new ResizeObserver(handleResize);
		if (container) resizeObserver.observe(container);

		handleResize();

		return () => {
			if (container) resizeObserver.unobserve(container);
		};
	}, []);

	return (
		<ContainerWidthContext.Provider value={containerWidth}>
			<div ref={containerRef}>{children}</div>
		</ContainerWidthContext.Provider>
	);
};

export default ContainerWidthProvider;
