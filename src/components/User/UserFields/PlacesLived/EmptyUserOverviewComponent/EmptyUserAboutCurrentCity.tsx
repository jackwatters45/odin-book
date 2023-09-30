import useUserAboutOverviewItem from "../../../../Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";
import EmptyUserAboutItem from "../../../../Shared/USER/EmptyUserAboutItem";
import CurrentCityUserOverviewForm from "../UserOverviewForms/CurrentCityUserOverviewForm";

const EmptyUserAboutCurrentCity = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<EmptyUserAboutItem
			buttonText={"current city"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<CurrentCityUserOverviewForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default EmptyUserAboutCurrentCity;
