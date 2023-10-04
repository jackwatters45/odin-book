import useUserAboutOverviewItem from "../../../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import EmptyUserAboutItem from "../../../../../Shared/UserAboutOverviewItem/EmptyUserAboutItem/EmptyUserAboutItem";
import CurrentCityUserOverviewForm from "../Form/CurrentCityForm";

const EmptyCurrentCity = () => {
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

export default EmptyCurrentCity;
