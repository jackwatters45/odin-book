import Loading from "@/components/Shared/Loading";
import { RefObject, forwardRef } from "react";
import { StyledLoadingContainer, StyledNoMoreText } from "./InfiniteScrollLoading.styles";

interface InfiniteScrollLoadingProps {
	isFetchingNextPage: boolean;
	hasNextPage: boolean | undefined;
	isLoading: boolean;
	noMoreText?: string;
	ref: RefObject<HTMLDivElement>;
	className?: string;
}

const InfiniteScrollLoading = forwardRef<HTMLDivElement, InfiniteScrollLoadingProps>(
	({ isFetchingNextPage, hasNextPage, isLoading, noMoreText, className }, ref) => {
		return isFetchingNextPage ? (
			<StyledLoadingContainer>
				<Loading />
			</StyledLoadingContainer>
		) : !hasNextPage && !isLoading && noMoreText ? (
			<StyledNoMoreText>{noMoreText}</StyledNoMoreText>
		) : (
			<div
				ref={ref}
				className={className}
				style={{
					width: "1px",
					height: "1px",
				}}
			/>
		);
	},
);

InfiniteScrollLoading.displayName = "InfiniteScrollLoading";

export default InfiniteScrollLoading;
