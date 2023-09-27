import { mdiBriefcase } from "@mdi/js";

import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import UserAboutOverviewItem from "../../UserAboutOverviewItem";
import { WorkData } from "@/types/IUser";
import WorkUserOverviewForm from "./form/WorkUserOverviewForm";
import useWorkUserOverviewItem from "./useWorkUserOverviewItem";

interface WorkUserOverviewItemProps {
	initialValues: WorkData | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	pastCompany?: string | undefined;
}

const WorkUserOverviewItem = ({
	initialValues,
	pastCompany,
	audience,
	includeAddDetailLink = true,
}: WorkUserOverviewItemProps) => {
	const {
		workPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	} = useWorkUserOverviewItem({ work: initialValues });

	return (
		<UserAboutOverviewItem
			title={
				initialValues?.company
					? [
							{ type: "text", content: workPretextFormatted },
							{ type: "bold", content: initialValues.company },
					  ]
					: null
			}
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

export default WorkUserOverviewItem;
