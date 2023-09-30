import useUserAboutOverviewItem from "../../../../Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";
import EmptyUserAboutItem from "../../../../Shared/USER/EmptyUserAboutItem";
import PlacesLivedUserOverviewForm from "../UserOverviewForms/PlacesLivedUserOverviewForm";

const EmptyUserAboutPlacesLived = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<EmptyUserAboutItem
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

export default EmptyUserAboutPlacesLived;
