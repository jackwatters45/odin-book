import EmptyUserAboutItem from "@/components/Shared/USER/EmptyUserAboutItem";
import useUserAboutOverviewItem from "@/components/Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";
import AboutFamilyMembersForm from "../form/AboutFamilyMembersForm";

const EmptyUserAboutFamilyMembers = () => {
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
				<AboutFamilyMembersForm
					audience={"Public"}
					initialValues={undefined}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default EmptyUserAboutFamilyMembers;
