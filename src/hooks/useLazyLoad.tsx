import { FC, ReactNode, Suspense } from "react";

import Loading from "@/components/Shared/Loading";

interface useLazyLoadProps {
	fallback?: ReactNode;
}

interface LazyWrapperProps {
	children: ReactNode;
}

const useLazyLoad = ({ fallback }: useLazyLoadProps) => {
	const LazyWrapper: FC<LazyWrapperProps> = ({ children }) => (
		<Suspense fallback={fallback ?? <Loading />}>{children}</Suspense>
	);

	return { LazyWrapper };
};

export default useLazyLoad;
