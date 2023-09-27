import { Suspense, lazy } from "react";

import EditProfileSectionHeader from "../../EditProfileSectionHeader";
import { ContentDiv } from "../../EditProfile.styles";
import { IUser } from "@/types/IUser";
import useDetails from "@/components/User/UserFields/Details/useDetails";
import DetailsDisplay from "@/components/User/UserFields/Details/DetailsDisplay";

const LazyEditDetailsForm = lazy(
	() => import("@/components/User/UserFields/Details/EditDetailsForm"),
);

interface DetailsEditProfileSectionProps {
	user: IUser;
}

const DetailsEditProfileSection = ({ user }: DetailsEditProfileSectionProps) => {
	const {
		isValues,
		ref,
		closeDialog,
		openDialog,
		register,
		handleSubmit,
		setValue,
		control,
	} = useDetails({
		user,
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
					register={register}
					setValue={setValue}
					control={control}
					onSubmit={handleSubmit}
				/>
			</Suspense>
		</ContentDiv>
	);
};

export default DetailsEditProfileSection;
