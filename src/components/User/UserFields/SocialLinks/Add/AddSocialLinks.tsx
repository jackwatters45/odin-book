import AddUserProperty from "@/components/User/Shared/AddUserProperty/AddUserProperty";
import AboutSocialLinksForm from "../Form";
import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";

const AddSocialLinks = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<AddUserProperty
			buttonText={"social link"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<AboutSocialLinksForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
					category="socialLinks"
				/>
			}
		/>
	);
};

export default AddSocialLinks;
