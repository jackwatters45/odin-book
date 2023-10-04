import { Suspense, lazy } from "react";

import EditProfileSectionHeader from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfileSectionHeader";
import { ContentDiv } from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfile.styles";
import { IUser } from "@/types/IUser";
import useDetails from "@/components/User/UserFields/Details/useDetails";
import DetailsDisplay from "@/components/User/UserFields/Details/DetailsDisplay";

const LazyEditDetailsForm = lazy(
	() => import("@/components/User/UserFields/Details/EditDetailsForm"),
);

interface EditProfileDetailsProps {
	user: IUser;
	closeParentDialog: () => void;
}

const EditProfileDetails = ({ user, closeParentDialog }: EditProfileDetailsProps) => {
	const {
		isValues,
		ref,
		closeDialog,
		closeAllDialogs,
		openDialog,
		register,
		handleSubmit,
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
			<Suspense>
				<LazyEditDetailsForm
					user={user}
					ref={ref}
					closeDialog={closeDialog}
					closeAllDialogs={closeAllDialogs}
					register={register}
					setValue={setValue}
					control={control}
					onSubmit={handleSubmit}
				/>
			</Suspense>
		</ContentDiv>
	);
};

export default EditProfileDetails;
