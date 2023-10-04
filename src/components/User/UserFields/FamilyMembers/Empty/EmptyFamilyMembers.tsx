import EmptyUserAboutItem from "@/components/User/Shared/EmptyUserAboutItem";
import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import FamilyMembersForm from "../Form/FamilyMembersForm";

const EmptyFamilyMembers = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<EmptyUserAboutItem
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

export default EmptyFamilyMembers;
