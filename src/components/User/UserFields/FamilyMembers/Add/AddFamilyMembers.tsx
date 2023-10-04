import AddUserProperty from "@/components/User/Shared/AddUserProperty";
import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import FamilyMembersForm from "../Form/FamilyMembersForm";

const AddFamilyMembers = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<AddUserProperty
			buttonText={"family member"}
			handleOpenForm={handleOpenForm}
			isEditing={isEditing}
			FormComponent={
				<FamilyMembersForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AddFamilyMembers;
