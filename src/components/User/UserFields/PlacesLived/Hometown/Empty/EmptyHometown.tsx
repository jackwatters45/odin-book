import EmptyUserAboutItem from "@/components/User/Shared/EmptyUserAboutItem/EmptyUserAboutItem";

import HometownUserOverviewForm from "../Form/HometownForm";
import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";

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
