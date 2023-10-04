import UserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AboutYouForm from "./Form";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

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
			categoryDisplayName="About you"
			addText={"Write some details about yourself"}
			isEditing={isEditing}
			icon={undefined}
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
		/>
	);
};

export default AboutYou;
