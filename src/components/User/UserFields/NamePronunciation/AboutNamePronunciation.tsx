import UserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutNamePronunciationForm from "./form";
import { INamePronunciation } from "./types/NamePronunciation";
import { mdiAccountVoice } from "@mdi/js";
import getFullName from "./utils/getFullName";

interface AboutNamePronunciationProps {
	initialValues: INamePronunciation | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const AboutNamePronunciation = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: AboutNamePronunciationProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "name-pronunciation", param: undefined });

	return (
		<UserAboutOverviewItem
			title={
				initialValues
					? [
							{
								type: "text",
								content: getFullName(
									initialValues?.firstName,
									initialValues?.lastName,
								) as string,
							},
					  ]
					: null
			}
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
				<AboutNamePronunciationForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutNamePronunciation;
