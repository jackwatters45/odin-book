import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { mdiEmailFastOutline } from "@mdi/js";
import EmailUserOverviewForm from "./Form";

interface EmailProps {
	email: string | undefined;
	audience: AudienceStatusOptions;
}

const Email = ({ email, audience }: EmailProps) => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: "email",
		param: undefined,
	});

	return (
		<UserAboutOverviewItem
			title={email ? [{ type: "text", content: email }] : null}
			category="email"
			categoryDisplayName="email"
			subtitle={email ? "Email" : null}
			audience={audience}
			icon={mdiEmailFastOutline}
			addText={"Add email to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={undefined}
			FormComponent={
				<EmailUserOverviewForm
					audience={audience}
					handleCloseForm={handleCloseForm}
					initialValues={email}
				/>
			}
		/>
	);
};

export default Email;
