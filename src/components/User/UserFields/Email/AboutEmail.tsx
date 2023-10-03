import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { mdiEmailFastOutline } from "@mdi/js";
import EmailUserOverviewForm from "./form/AboutEmailForm";

interface AboutEmailProps {
	email: string | undefined;
	audience: AudienceStatusOptions;
}

const AboutEmail = ({ email, audience }: AboutEmailProps) => {
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

export default AboutEmail;
