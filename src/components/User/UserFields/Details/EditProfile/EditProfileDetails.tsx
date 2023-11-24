import EditProfileSectionHeader from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfileSectionHeader";
import { ContentDiv } from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfile.styles";
import { IUser } from "@/types/IUser";
import useDetails from "@/components/User/UserFields/Details/useDetails";
import DetailsDisplay from "@/components/User/UserFields/Details/DetailsDisplay";

import EditDetailsForm from "@/components/User/UserFields/Details/EditDetailsForm";

interface EditProfileDetailsProps {
	user: IUser;
	closeParentDialog: () => void;
}

const EditProfileDetails = ({ user, closeParentDialog }: EditProfileDetailsProps) => {
	const {
		isValues,
		ref,
		closeDialogAndReset,
		closeAllDialogs,
		openDialog,
		isOpen,
		register,
		submitForm,
		setValue,
		control,
	} = useDetails({
		user,
		closeParentDialog,
	});

	return (
		<ContentDiv>
			<EditProfileSectionHeader
				title="Customize your intro"
				isData={isValues}
				openDialog={openDialog}
			/>
			<DetailsDisplay user={user} isValues={isValues} />
			{isOpen && (
				<EditDetailsForm
					user={user}
					ref={ref}
					closeDialog={closeDialogAndReset}
					closeAllDialogs={closeAllDialogs}
					register={register}
					setValue={setValue}
					control={control}
					onSubmit={submitForm}
				/>
			)}
		</ContentDiv>
	);
};

export default EditProfileDetails;
