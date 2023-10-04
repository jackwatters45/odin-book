import AddUserProperty from "@/components/User/Shared/AddUserProperty";
import CurrentCityUserOverviewForm from "../Form/CurrentCityForm";
import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";

const AddCurrentCity = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<AddUserProperty
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

export default AddCurrentCity;
