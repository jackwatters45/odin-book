import EmptyUserAboutItem from "@/components/Shared/UserAboutOverviewItem/EmptyUserAboutItem/EmptyUserAboutItem";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AboutOtherNamesForm from "../Form";

const EmptyOtherNames = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<EmptyUserAboutItem
			buttonText={"other name"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<AboutOtherNamesForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default EmptyOtherNames;
