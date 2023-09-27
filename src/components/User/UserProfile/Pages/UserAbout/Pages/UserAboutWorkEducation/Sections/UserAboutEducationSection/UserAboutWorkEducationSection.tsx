import { FC } from "react";

import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { EducationData } from "@/types/IUser";
import capitalizeFirstLetterString from "@/utils/capitalizeFirstLetterString";
import EmptyUserAboutItem from "../../EmptyUserAboutItem";
import useUserAboutWorkEducationSection from "./useUserAboutWorkEducationSection";
import {
	StyledTitleText,
	StyledUserAboutWorkEducationSection,
} from "./UserAboutWorkEducationSection.styles";

export interface UserAboutWorkEducationSectionContent<T> {
	audience: AudienceStatusOptions;
	values: T & { _id: string };
}

interface SharedFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	formType: EducationData["type"];
}

interface NewFormProps extends SharedFormProps {
	initialValues: undefined;
}

interface ExistingFormProps<T> extends SharedFormProps {
	initialValues: T;
}

interface UserAboutWorkEducationSectionProps<T> {
	content: UserAboutWorkEducationSectionContent<T>[] | undefined;
	fieldName: EducationData["type"] | "work";
	NewFormComponent: FC<NewFormProps>;
	ExistingFormComponent: FC<ExistingFormProps<T>>;
}

const UserAboutWorkEducationSection = <T,>({
	content,
	fieldName,
	NewFormComponent,
	ExistingFormComponent,
}: UserAboutWorkEducationSectionProps<T>) => {
	const { isEditing, handleOpenForm, handleCloseForm, formType } =
		useUserAboutWorkEducationSection({ fieldName });

	return (
		<StyledUserAboutWorkEducationSection>
			<StyledTitleText>{capitalizeFirstLetterString(fieldName)}</StyledTitleText>
			<EmptyUserAboutItem
				fieldName={fieldName}
				handleOpenForm={handleOpenForm}
				isEditing={isEditing}
				FormComponent={
					<NewFormComponent
						audience={"Public"}
						initialValues={undefined}
						handleCloseForm={handleCloseForm}
						formType={formType as EducationData["type"]}
					/>
				}
			/>
			{content &&
				content.map(({ audience, values }) => (
					<ExistingFormComponent
						key={values._id}
						audience={audience}
						initialValues={values}
						handleCloseForm={handleCloseForm}
						formType={formType as EducationData["type"]}
					/>
				))}
		</StyledUserAboutWorkEducationSection>
	);
};

export default UserAboutWorkEducationSection;
