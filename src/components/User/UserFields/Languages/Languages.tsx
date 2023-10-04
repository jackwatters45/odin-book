import { mdiAccountVoice } from "@mdi/js";
import UserAboutOverviewItem from "../../Shared/UserAboutOverviewItem";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import LanguagesForm from "./Form";
import useLanguages from "./useLanguages";

interface LanguagesProps {
	languages: string[] | undefined;
	audience: AudienceStatusOptions;
}

const Languages = ({ languages, audience }: LanguagesProps) => {
	const {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
		formattedLanguages,
	} = useLanguages({ languages });

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
				<LanguagesForm
					audience={audience}
					initialValues={languages ? [...languages, ""] : [""]}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default Languages;
