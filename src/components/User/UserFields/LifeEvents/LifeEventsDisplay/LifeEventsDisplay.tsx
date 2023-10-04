import {
	mdiAccountStarOutline,
	mdiBottleTonicPlusOutline,
	mdiBriefcaseOutline,
	mdiCakeVariantOutline,
	mdiFamilyTree,
	mdiFlagVariantOutline,
	mdiGlobeModel,
	mdiHeadHeartOutline,
	mdiHomeOutline,
	mdiSchoolOutline,
	mdiTicketOutline,
} from "@mdi/js";
import styled from "styled-components";

import LifeEventIcon from "./LifeEventIcon/LifeEventIcon";
import DialogHeader from "@/components/Shared/Dialog/DialogHeader";

export const StyledIconsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const LifeEventsForm = () => {
	return (
		<div style={{ outline: "1px solid red" }}>
			{/* wrong below? */}
			<DialogHeader
				title={"TODO"}
				closeDialog={() => {
					// TODO
					console.log("close dialog");
				}}
			/>

			<h3>Life Events</h3>
			<span>Share and remember important moments from your life.</span>
			<hr />
			<span>SELECT A CATEGORY</span>
			<StyledIconsContainer>
				<LifeEventIcon iconPath={mdiBriefcaseOutline} text={"Work"} />
				<LifeEventIcon iconPath={mdiSchoolOutline} text={"Education"} />
				<LifeEventIcon iconPath={mdiHeadHeartOutline} text={"Relationship"} />
				<LifeEventIcon iconPath={mdiHomeOutline} text={"Home & Living"} />
				<LifeEventIcon iconPath={mdiFamilyTree} text={"Family"} />
				<LifeEventIcon iconPath={mdiGlobeModel} text={"Travel"} />
				<LifeEventIcon iconPath={mdiTicketOutline} text={"Interests & Activities"} />
				<LifeEventIcon iconPath={mdiBottleTonicPlusOutline} text={"Health & Wellness"} />
				<LifeEventIcon
					iconPath={mdiAccountStarOutline}
					text={"Milestones & Achievements"}
				/>
				<LifeEventIcon iconPath={mdiCakeVariantOutline} text={"Remembrance"} />
				<LifeEventIcon iconPath={mdiFlagVariantOutline} text={"Create Your Own"} />
			</StyledIconsContainer>
		</div>
	);
};

export default LifeEventsForm;
