import EmptyUserAboutItem from "@/components/Shared/UserAboutOverviewItem/EmptyUserAboutItem/EmptyUserAboutItem";
import AboutSocialLinksForm from "../Form";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";

const EmptySocialLinks = () => {
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

export default EmptySocialLinks;
