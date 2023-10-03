import EmptyUserAboutItem from "@/components/Shared/UserAboutOverviewItem/EmptyUserAboutItem/EmptyUserAboutItem";
import useUserAboutOverviewItem from "../../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import HometownUserOverviewForm from "../UserOverviewForms/HometownUserOverviewForm";

const EmptyUserAboutHometown = () => {
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

export default EmptyUserAboutHometown;
