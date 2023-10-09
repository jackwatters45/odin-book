import { mdiSchool } from "@mdi/js";
import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import { formatEducationAttendingDates } from "@/components/User/UserFields/Education/utils/formatEducationData";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import EducationUserOverviewForm from "./Form/EducationForm";
import useAboutOverviewEducation from "./useEducation";
import { IEducation } from "./types/EducationTypes";
import { CollegePlaceholder, HighSchoolPlaceholder } from "./Placeholders";

interface EducationProps {
	initialValues: IEducation | undefined;
	audience: AudienceStatusOptions;
	formType: IEducation["type"];
	includeAddDetailLink?: boolean;
	hideIfRestricted?: boolean;
}

const Education = ({
	initialValues,
	audience,
	formType,
	includeAddDetailLink = true,
	hideIfRestricted = false,
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
			hideIfRestricted={hideIfRestricted}
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
			PlaceholderComponent={
				formType === "college" ? <CollegePlaceholder /> : <HighSchoolPlaceholder />
			}
		/>
	);
};

export default Education;
