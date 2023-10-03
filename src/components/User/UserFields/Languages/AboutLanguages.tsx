import { mdiAccountVoice } from "@mdi/js";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutLanguagesForm from "./form/AboutLanguagesForm";
import useAboutLanguages from "./useAboutLanguages";

interface AboutLanguagesProps {
	languages: string[] | undefined;
	audience: AudienceStatusOptions;
}

const AboutLanguages = ({ languages, audience }: AboutLanguagesProps) => {
	const {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
		formattedLanguages,
	} = useAboutLanguages({ languages });

	return (
		<UserAboutOverviewItem
			title={
				languages && languages?.length > 0
					? [{ type: "text", content: formattedLanguages }]
					: null
			}
			category="languages"
			categoryDisplayName="languages"
			subtitle={languages ? "Languages" : null}
			audience={audience}
			icon={mdiAccountVoice}
			addText={"Add languages to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			FormComponent={
				<AboutLanguagesForm
					audience={audience}
					initialValues={languages ? [...languages, ""] : [""]}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutLanguages;
