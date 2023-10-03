import { mdiCakeVariant } from "@mdi/js";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutBirthdayForm from "./form";
import useAboutBirthday from "./useAboutBirthday";

interface AboutBirthdayProps {
	birthday: Date | undefined;
	audience: AudienceStatusOptions;
}

const AboutBirthday = ({ birthday, audience }: AboutBirthdayProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, formattedBirthday } =
		useAboutBirthday({ birthday });

	return (
		<UserAboutOverviewItem
			title={formattedBirthday ? [{ type: "text", content: formattedBirthday }] : null}
			category="birthday"
			categoryDisplayName="birthday"
			subtitle={birthday ? "Birthday" : null}
			audience={audience}
			icon={mdiCakeVariant}
			addText={"Add birthday to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={undefined}
			FormComponent={
				<AboutBirthdayForm
					audience={audience}
					initialValues={birthday}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutBirthday;
