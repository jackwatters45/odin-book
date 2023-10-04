import useUserAboutOverviewItem from "../../../Shared/SingleUserProperty/useSingleUserProperty";
import AddUserProperty from "../../../Shared/AddUserProperty/AddUserProperty";
import PlacesLivedUserOverviewForm from "../Form";

const AddPlacesLived = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<AddUserProperty
			buttonText={"city"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<PlacesLivedUserOverviewForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
					category="placesLived"
				/>
			}
		/>
	);
};

export default AddPlacesLived;
