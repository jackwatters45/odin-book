import EmptyUserAboutItem from "@/components/User/Shared/EmptyUserAboutItem/EmptyUserAboutItem";
import AboutWebsitesForm from "../Form/WebsitesForm";
import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";

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
