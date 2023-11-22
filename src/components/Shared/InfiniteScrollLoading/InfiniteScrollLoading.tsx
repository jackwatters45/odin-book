import Loading from "@/components/Shared/Loading";
import { RefObject, forwardRef } from "react";
import { StyledLoadingContainer, StyledNoMoreText } from "./InfiniteScrollLoading.styles";

interface InfiniteScrollLoadingProps {
	isFetchingNextPage: boolean;
	hasNextPage: boolean | undefined;
	isLoading: boolean;
	noMoreText?: string;
	ref: RefObject<HTMLDivElement>;
}

const InfiniteScrollLoading = forwardRef<HTMLDivElement, InfiniteScrollLoadingProps>(
	({ isFetchingNextPage, hasNextPage, isLoading, noMoreText }, ref) => {
		return isFetchingNextPage ? (
			<StyledLoadingContainer>
				<Loading />
			</StyledLoadingContainer>
		) : !hasNextPage && !isLoading && noMoreText ? (
			<StyledNoMoreText>{noMoreText}</StyledNoMoreText>
		) : (
			<div
				ref={ref}
				style={{
					width: "100%",
					height: "1px",
				}}
			/>
		);
	},
);

InfiniteScrollLoading.displayName = "InfiniteScrollLoading";

export default InfiniteScrollLoading;
