import { mdiBriefcase } from "@mdi/js";

import UserAboutOverviewItem from "../../Shared/UserAboutOverviewItem";
import WorkUserOverviewForm from "./Form/WorkForm";
import useWork from "./useWork";
import { IWork } from "./types/WorkTypes";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

interface WorkProps {
	initialValues: IWork | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	pastCompany?: string | undefined;
}

const Work = ({
	initialValues,
	pastCompany,
	audience,
	includeAddDetailLink = true,
}: WorkProps) => {
	const { title, isEditing, handleOpenForm, handleCloseForm, deleteMutation } = useWork({
		work: initialValues,
	});

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
		/>
	);
};

export default Work;
