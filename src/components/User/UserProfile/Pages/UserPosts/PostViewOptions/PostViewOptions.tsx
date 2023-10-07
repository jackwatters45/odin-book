import { mdiCog, mdiTuneVariant } from "@mdi/js";

import { StyledPostViewOptionsContainer } from "./PostViewOptions.styles";
import StandardButton from "@/components/Shared/StandardButton";
import { StandardButtonContainer } from "@/components/Shared/StandardButton/StandardButton.styles";
import useIsOwnProfile from "@/hooks/useIsOwnProfile";

// TODO how to manage preferences for this? local storage?
// TODO manage selected view state
const PostViewOptions = () => {
	const isOwnProfile = useIsOwnProfile();

	return (
		<StyledPostViewOptionsContainer
			title="Posts"
			rightColumn={
				<StandardButtonContainer>
					<StandardButton
						text="Filters"
						icon={mdiTuneVariant}
						iconSize={0.8}
						onClick={() => {
							// TODO
							console.log("Filters");
						}}
					/>
					{isOwnProfile && (
						<StandardButton
							text="Manage posts"
							icon={mdiCog}
							iconSize={0.8}
							onClick={() => {
								// TODO
								console.log("Manage posts");
							}}
						/>
					)}
				</StandardButtonContainer>
			}
		/>
	);
};

export default PostViewOptions;
