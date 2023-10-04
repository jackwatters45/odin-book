import EmptyUserAboutItem from "@/components/User/Shared/EmptyUserAboutItem";
import CurrentCityUserOverviewForm from "../Form/CurrentCityForm";
import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";

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
