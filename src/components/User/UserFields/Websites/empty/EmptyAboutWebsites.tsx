import EmptyUserAboutItem from "@/components/Shared/USER/EmptyUserAboutItem";
import AboutWebsitesForm from "../form/AboutWebsitesForm";
import useUserAboutOverviewItem from "@/components/Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";

const EmptyAboutWebsites = () => {
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

export default EmptyAboutWebsites;
