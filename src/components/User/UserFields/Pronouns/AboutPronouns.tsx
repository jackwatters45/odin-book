import { mdiCommentAccount } from "@mdi/js";
import AboutPronounsForm from "./form";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { PronounsType } from "./types/PronounsTypes";

interface AboutPronounsProps {
	pronouns: PronounsType | undefined;
	audience: AudienceStatusOptions;
}

const AboutPronouns = ({ pronouns, audience }: AboutPronounsProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "pronouns", param: undefined });

	return (
		<UserAboutOverviewItem
			title={pronouns ? [{ type: "text", content: pronouns }] : null}
			category="pronouns"
			categoryDisplayName="pronouns"
			subtitle={pronouns ? "Pronouns" : null}
			audience={audience}
			icon={mdiCommentAccount}
			addText={"Add pronouns to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			FormComponent={
				<AboutPronounsForm
					audience={audience}
					initialValues={pronouns}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutPronouns;
