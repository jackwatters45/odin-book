import AddUserProperty from "@/components/User/Shared/AddUserProperty/AddUserProperty";
import AboutWebsitesForm from "../Form/WebsitesForm";
import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";

const AddWebsites = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<AddUserProperty
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

export default AddWebsites;
