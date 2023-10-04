import { mdiSchool } from "@mdi/js";
import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import { formatEducationAttendingDates } from "@/components/User/UserFields/Education/utils/formatEducationData";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import EducationUserOverviewForm from "./Form/EducationForm";
import useAboutOverviewEducation from "./useEducation";
import { EducationData } from "./types/EducationTypes";

interface EducationProps {
	initialValues: EducationData | undefined;
	audience: AudienceStatusOptions;
	formType: EducationData["type"];
	includeAddDetailLink?: boolean;
}

const Education = ({
	initialValues,
	audience,
	formType,
	includeAddDetailLink = true,
}: EducationProps) => {
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

export default Education;
