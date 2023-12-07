import useProfileStatus from "@/hooks/auth/useIsOwnProfile";
import useRenderTitleSegments from "@/utils/render/titleSegment/useRenderTitleSegments";

const useUserPropertyDisplay = () => {
	const { isOwnProfile } = useProfileStatus();

	const renderTitleSegment = useRenderTitleSegments();

	return {
		isOwnProfile,
		renderTitleSegment,
	};
};

export default useUserPropertyDisplay;
