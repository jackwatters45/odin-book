import { mdiBriefcase } from "@mdi/js";

import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import WorkUserOverviewForm from "./Form/WorkForm";
import useWork from "./useWork";
import { IWork } from "./types/WorkTypes";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import WorkPlaceholder from "./Placeholder/WorkPlaceholder";

interface WorkProps {
	initialValues: IWork | undefined;
	pastCompany?: string | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	hideIfRestricted?: boolean;
}

const Work = ({
	initialValues,
	pastCompany,
	audience,
	includeAddDetailLink = true,
	hideIfRestricted = false,
}: WorkProps) => {
	const { title, isEditing, handleOpenForm, handleCloseForm, deleteMutation } = useWork({
		work: initialValues,
	});

	console.log("hideIfRestricted", hideIfRestricted); // TODO

	return (
		<UserAboutOverviewItem
			title={title}
			subtitle={pastCompany ? `Past: ${pastCompany}` : null}
			audience={audience}
			itemId={initialValues?._id}
			category={"work"}
			categoryDisplayName="work"
			icon={mdiBriefcase}
			addText={"Add work to profile"}
			hideIfRestricted={hideIfRestricted}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<WorkUserOverviewForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
			PlaceholderComponent={<WorkPlaceholder />}
		/>
	);
};

export default Work;
