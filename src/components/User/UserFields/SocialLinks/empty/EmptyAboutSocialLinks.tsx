import EmptyUserAboutItem from "@/components/Shared/USER/EmptyUserAboutItem";
import AboutSocialLinksForm from "../form";
import useUserAboutOverviewItem from "@/components/Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";

const EmptyAboutSocialLinks = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<EmptyUserAboutItem
			buttonText={"social link"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<AboutSocialLinksForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
					category="socialLinks"
				/>
			}
		/>
	);
};

export default EmptyAboutSocialLinks;
