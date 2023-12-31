import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import useUserAboutOverviewItem from "../../Shared/SingleUserProperty/useSingleUserProperty";
import { mdiEmailFastOutline } from "@mdi/js";
import EmailUserOverviewForm from "./Form";
import EmailPlaceholder from "./Placeholder";

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
			title={
				email
					? [{ type: "text", content: email, style: { wordBreak: "break-all" } }]
					: null
			}
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
			PlaceholderComponent={<EmailPlaceholder />}
		/>
	);
};

export default Email;
