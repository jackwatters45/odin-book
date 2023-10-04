import { mdiBookAccount } from "@mdi/js";

import UserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import OtherNamesForm from "./Form";
import { OtherName } from "./types/OtherNamesTypes";

interface OtherNamesProps {
	initialValues: OtherName | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const OtherNames = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: OtherNamesProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "other-names", param: initialValues?._id });

	return (
		<UserAboutOverviewItem
			title={initialValues ? [{ type: "text", content: initialValues.name }] : null}
			subtitle={initialValues ? initialValues.type : null}
			audience={audience}
			category={"otherNames"}
			categoryDisplayName="Other Names"
			addText={"Add a nickname, a birth name..."}
			isEditing={isEditing}
			icon={mdiBookAccount}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			itemId={initialValues?._id}
			FormComponent={
				<OtherNamesForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default OtherNames;
