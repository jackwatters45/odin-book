import { mdiAccountVoice } from "@mdi/js";

import UserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import NamePronunciationForm from "./Form";
import { INamePronunciation } from "./types/NamePronunciationTypes";
import useNamePronunciation from "./useNamePronunciation";

interface NamePronunciationProps {
	initialValues: INamePronunciation | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const NamePronunciation = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: NamePronunciationProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation, title } =
		useNamePronunciation({ initialValues });

	return (
		<UserAboutOverviewItem
			title={title}
			audience={audience}
			category={"namePronunciation"}
			categoryDisplayName="Name Pronunciation"
			addText={"Add a name pronunciation"}
			isEditing={isEditing}
			icon={mdiAccountVoice}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<NamePronunciationForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default NamePronunciation;
