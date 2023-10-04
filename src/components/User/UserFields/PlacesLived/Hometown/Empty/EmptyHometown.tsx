import EmptyUserAboutItem from "@/components/Shared/UserAboutOverviewItem/EmptyUserAboutItem/EmptyUserAboutItem";
import useUserAboutOverviewItem from "../../../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import HometownUserOverviewForm from "../Form/HometownForm";

const EmptyHometown = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<EmptyUserAboutItem
			buttonText={"hometown"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<HometownUserOverviewForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default EmptyHometown;
