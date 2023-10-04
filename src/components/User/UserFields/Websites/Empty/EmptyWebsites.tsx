import EmptyUserAboutItem from "@/components/Shared/UserAboutOverviewItem/EmptyUserAboutItem/EmptyUserAboutItem";
import AboutWebsitesForm from "../Form/WebsitesForm";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";

const EmptyWebsites = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<EmptyUserAboutItem
			buttonText={"website"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<AboutWebsitesForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
					category="websites"
				/>
			}
		/>
	);
};

export default EmptyWebsites;
