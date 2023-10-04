import { mdiCakeVariant } from "@mdi/js";

import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import BirthdayForm from "./Form";
import useBirthday from "./useBirthday";

interface BirthdayProps {
	birthday: Date | undefined;
	audience: AudienceStatusOptions;
}

const Birthday = ({ birthday, audience }: BirthdayProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, formattedBirthday } = useBirthday({
		birthday,
	});

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
				<BirthdayForm
					audience={audience}
					initialValues={birthday}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default Birthday;
