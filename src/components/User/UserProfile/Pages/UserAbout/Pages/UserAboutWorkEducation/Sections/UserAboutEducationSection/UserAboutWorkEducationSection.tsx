import { FC } from "react";

import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import capitalizeFirstLetterString from "@/utils/format/capitalizeFirstLetterString";

import useUserAboutWorkEducationSection from "./useUserAboutWorkEducationSection";
import { StyledUserAboutWorkEducationSection } from "./UserAboutWorkEducationSection.styles";
import { BoldText } from "@/styles/SharedStyles";
import AddUserProperty from "@/components/User/Shared/AddUserProperty/AddUserProperty";
import { IEducation } from "@/components/User/UserFields/Education/types/EducationTypes";
import WorkPlaceholder from "@/components/User/UserFields/Work/Placeholder/WorkPlaceholder";
import {
	CollegePlaceholder,
	HighSchoolPlaceholder,
} from "@/components/User/UserFields/Education/Placeholders";

export interface UserAboutWorkEducationSectionContent<T> {
	audience: AudienceStatusOptions;
	values: T & { _id: string };
}

interface SharedFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	formType: IEducation["type"];
	hideIfRestricted?: boolean;
}

interface NewFormProps extends SharedFormProps {
	initialValues: undefined;
}

interface ExistingFormProps<T> extends SharedFormProps {
	initialValues: T;
}

interface UserAboutWorkEducationSectionProps<T> {
	content: UserAboutWorkEducationSectionContent<T>[] | undefined;
	fieldName: IEducation["type"] | "work";
	NewFormComponent: FC<NewFormProps>;
	ExistingFormComponent: FC<ExistingFormProps<T>>;
}

const UserAboutWorkEducationSection = <T,>({
	content,
	fieldName,
	NewFormComponent,
	ExistingFormComponent,
}: UserAboutWorkEducationSectionProps<T>) => {
	const { isOwnProfile, isEditing, handleOpenForm, handleCloseForm, formType } =
		useUserAboutWorkEducationSection({ fieldName });

	return (
		<StyledUserAboutWorkEducationSection>
			<BoldText>{capitalizeFirstLetterString(fieldName)}</BoldText>
			{isOwnProfile && (
				<AddUserProperty
					buttonText={fieldName}
					handleOpenForm={handleOpenForm}
					isEditing={isEditing}
					FormComponent={
						<NewFormComponent
							audience={"Public"}
							initialValues={undefined}
							handleCloseForm={handleCloseForm}
							formType={formType as IEducation["type"]}
						/>
					}
				/>
			)}
			{!isOwnProfile &&
				!content?.length &&
				(fieldName === "work" ? (
					<WorkPlaceholder />
				) : fieldName === "college" ? (
					<CollegePlaceholder />
				) : (
					<HighSchoolPlaceholder />
				))}
			{content &&
				content.map(({ audience, values }, index) => (
					<ExistingFormComponent
						key={values._id}
						audience={audience}
						initialValues={values}
						handleCloseForm={handleCloseForm}
						formType={formType as IEducation["type"]}
						hideIfRestricted={index > 0}
					/>
				))}
		</StyledUserAboutWorkEducationSection>
	);
};

export default UserAboutWorkEducationSection;
