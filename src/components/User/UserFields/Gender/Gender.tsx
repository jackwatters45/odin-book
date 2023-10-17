import { mdiAccount } from "@mdi/js";
import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import GenderForm from "./Form";
import useGender from "./useGender";
import { Gender } from "./types/GenderTypes";
import GenderPlaceholder from "./Placeholder";

interface GenderProps {
	gender: Gender | undefined;
	audience: AudienceStatusOptions;
}

const Gender = ({ gender, audience }: GenderProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation, displayGender } =
		useGender({ gender });

	return (
		<UserAboutOverviewItem
			title={gender ? [{ type: "text", content: displayGender as string }] : null}
			category="gender"
			categoryDisplayName="gender"
			subtitle={gender ? "Gender" : null}
			audience={audience}
			icon={mdiAccount}
			addText={"Add gender to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			PlaceholderComponent={<GenderPlaceholder />}
			FormComponent={
				<GenderForm
					audience={audience}
					initialValues={gender}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default Gender;
