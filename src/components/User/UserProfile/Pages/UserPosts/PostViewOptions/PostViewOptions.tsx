import { mdiCog, mdiTuneVariant, mdiViewGrid, mdiViewHeadline } from "@mdi/js";

import {
	StyledPostViewOptionsContainer,
	StyledSelectedViewButton,
	StyledUnselectedViewButton,
	StyledViewContainer,
} from "./PostViewOptions.styles";
import StandardButton from "@/components/Shared/StandardButton";
import { StandardButtonContainer } from "@/components/Shared/StandardButton/StandardButton.styles";

// TODO how to manage preferences for this? local storage?
// TODO manage selected view state
const PostViewOptions = () => {
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
					<StandardButton
						text="Manage posts"
						icon={mdiCog}
						iconSize={0.8}
						onClick={() => {
							// TODO
							console.log("Manage posts");
						}}
					/>
				</StandardButtonContainer>
			}
		>
			<StyledViewContainer>
				<StyledSelectedViewButton
					text="List view"
					icon={mdiViewHeadline}
					iconSize={1}
					colorClass="transparent"
					onClick={() => {
						// TODO
						console.log("List view");
					}}
				/>
				<StyledUnselectedViewButton
					text="Grid view"
					icon={mdiViewGrid}
					iconSize={1}
					colorClass="transparent"
					onClick={() => {
						// TODO
						console.log("Grid view");
					}}
				/>
			</StyledViewContainer>
		</StyledPostViewOptionsContainer>
	);
};

export default PostViewOptions;
