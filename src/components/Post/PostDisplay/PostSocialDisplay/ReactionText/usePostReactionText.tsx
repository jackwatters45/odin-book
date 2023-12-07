import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import useRenderTitleSegments from "@/utils/render/titleSegment/useRenderTitleSegments";

const usePostReactionText = () => {
	const currentUserId = useCurrentUserCached()?._id;

	const renderTitleSegments = useRenderTitleSegments();

	return {
		currentUserId,
		renderTitleSegments,
	};
};

export default usePostReactionText;
