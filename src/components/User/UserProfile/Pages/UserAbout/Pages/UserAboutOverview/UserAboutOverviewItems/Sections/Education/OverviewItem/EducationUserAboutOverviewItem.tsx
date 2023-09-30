import { mdiSchool } from "@mdi/js";
import UserAboutOverviewItem from "../../../../../../../../../../Shared/USER/UserAboutOverviewItem";
import { formatEducationAttendingDates } from "@/components/User/UserFields/Education/formatEducationData";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { EducationData } from "@/types/IUser";
import EducationUserOverviewForm from "./form/EducationUserOverviewForm";
import useAboutOverviewEducation from "./useAboutOverviewEducation";

interface EducationUserOverviewItemProps {
	initialValues: EducationData | undefined;
	audience: AudienceStatusOptions;
	formType: EducationData["type"];
	includeAddDetailLink?: boolean;
}

const EducationUserOverviewItem = ({
	initialValues,
	audience,
	formType,
	includeAddDetailLink = true,
}: EducationUserOverviewItemProps) => {
	const {
		educationPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	} = useAboutOverviewEducation({ education: initialValues });

	return (
		<UserAboutOverviewItem
			title={
				initialValues && [
					{ type: "text", content: educationPretextFormatted },
					{ type: "bold", content: initialValues.school },
				]
			}
			itemId={initialValues?._id}
			category={"education"}
			categoryDisplayName="education"
			subtitle={formatEducationAttendingDates(initialValues)}
			audience={audience}
			icon={mdiSchool}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			addText={`Add ${formType}`}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<EducationUserOverviewForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
					formType={formType}
				/>
			}
		/>
	);
};

export default EducationUserOverviewItem;
