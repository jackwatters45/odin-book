import { mdiCommentAccount } from "@mdi/js";
import PronounsForm from "./Form";
import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import useUserAboutOverviewItem from "../../Shared/SingleUserProperty/useSingleUserProperty";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { PronounsType } from "./types/PronounsTypes";
import PronounsPlaceholder from "./Placeholder";

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
			PlaceholderComponent={<PronounsPlaceholder />}
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
