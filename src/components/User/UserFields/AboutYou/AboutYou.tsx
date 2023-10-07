import UserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty";
import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import AboutYouForm from "./Form";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { mdiAccountSupervisorCircle } from "@mdi/js";
import AboutYouPlaceholder from "./Placeholder";

interface AboutYouProps {
	initialValues: string | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const AboutYou = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: AboutYouProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "about-you", param: undefined });

	return (
		<UserAboutOverviewItem
			title={initialValues ? [{ type: "text", content: initialValues }] : null}
			audience={audience}
			category={"aboutYou"}
			categoryDisplayName="About ou"
			addText={"Write some details about yourself"}
			isEditing={isEditing}
			icon={mdiAccountSupervisorCircle}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<AboutYouForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
			PlaceholderComponent={<AboutYouPlaceholder />}
		/>
	);
};

export default AboutYou;
