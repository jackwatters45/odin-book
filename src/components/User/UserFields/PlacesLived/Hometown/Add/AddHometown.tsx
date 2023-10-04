import AddUserProperty from "@/components/User/Shared/AddUserProperty/AddUserProperty";

import HometownUserOverviewForm from "../Form/HometownForm";
import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";

const AddHometown = () => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	return (
		<AddUserProperty
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

export default AddHometown;
