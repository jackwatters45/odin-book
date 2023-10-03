import { mdiAccount } from "@mdi/js";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutGenderForm from "./form";
import useAboutGender from "./useAboutGender";
import { Gender } from "./types/GenderTypes";

interface AboutGenderProps {
	gender: Gender | undefined;
	audience: AudienceStatusOptions;
}

const AboutGender = ({ gender, audience }: AboutGenderProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation, displayGender } =
		useAboutGender({ gender });

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
			FormComponent={
				<AboutGenderForm
					audience={audience}
					initialValues={gender}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutGender;
