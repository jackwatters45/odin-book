import { mdiCommentAccount } from "@mdi/js";
import PronounsForm from "./Form";
import UserAboutOverviewItem from "../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { PronounsType } from "./types/PronounsTypes";

interface PronounsProps {
	pronouns: PronounsType | undefined;
	audience: AudienceStatusOptions;
}

const Pronouns = ({ pronouns, audience }: PronounsProps) => {
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
				<PronounsForm
					audience={audience}
					initialValues={pronouns}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default Pronouns;
