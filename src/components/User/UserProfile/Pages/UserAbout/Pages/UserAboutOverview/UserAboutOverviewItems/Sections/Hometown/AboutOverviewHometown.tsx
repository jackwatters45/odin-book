import { mdiMapMarker } from "@mdi/js";

import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import UserAboutOverviewItem from "../../UserAboutOverviewItem";
import { PlaceLivedData } from "@/types/IUser";
import formatCity from "@/components/User/UserFields/PlacesLived/formatCity";
import HometownUserOverviewForm from "./form";
import useUserAboutOverviewItem from "../../UserAboutOverviewItem/useUserAboutOverviewItem";

interface AboutOverviewHometownProps {
	hometown: PlaceLivedData | undefined;
	audience: AudienceStatusOptions;
}

const AboutOverviewHometown = ({ hometown, audience }: AboutOverviewHometownProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "hometown" });

	return (
		<UserAboutOverviewItem
			title={
				hometown?._id
					? [
							{ type: "text", content: "From " },
							{ type: "bold", content: formatCity(hometown.city, hometown.state) },
					  ]
					: null
			}
			category="hometown"
			categoryDisplayName="hometown"
			audience={audience}
			icon={mdiMapMarker}
			addText="Add hometown to profile"
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			FormComponent={
				<HometownUserOverviewForm
					audience={audience}
					handleCloseForm={handleCloseForm}
					initialValues={hometown}
				/>
			}
		/>
	);
};

export default AboutOverviewHometown;
