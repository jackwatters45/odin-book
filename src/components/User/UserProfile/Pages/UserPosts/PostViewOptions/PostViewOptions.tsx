import { mdiViewGrid, mdiViewHeadline } from "@mdi/js";
import Icon from "@mdi/react";
import {
	StyledPostViewOptionsContainer,
	StyledSelectedViewButton,
	StyledUnselectedViewButton,
	StyledViewContainer,
} from "./PostViewOptions.styles";

// TODO change section title to allow react node
// TODO combine header for this with the edit profile ones

// TODO how to manage preferences for this? local storage?
const PostViewOptions = () => {
	return (
		// TODO add filter manage button
		<StyledPostViewOptionsContainer title="Posts">
			<StyledViewContainer>
				<StyledSelectedViewButton>
					<Icon path={mdiViewHeadline} size={1} />
					List view
				</StyledSelectedViewButton>
				<StyledUnselectedViewButton>
					<Icon path={mdiViewGrid} size={1} />
					Grid view
				</StyledUnselectedViewButton>
			</StyledViewContainer>
		</StyledPostViewOptionsContainer>
	);
};

export default PostViewOptions;
