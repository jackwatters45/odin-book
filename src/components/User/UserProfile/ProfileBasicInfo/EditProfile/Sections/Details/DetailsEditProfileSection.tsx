import EditProfileSectionHeader from "../../EditProfileSectionHeader";
import { ContentDiv } from "../../EditProfile.styles";
import { IUser } from "@/types/IUser";
import EditDetailsForm from "@/components/User/UserFields/Details/EditDetailsForm";
import useDetails from "@/components/User/UserFields/Details/useDetails";
import DetailsDisplay from "@/components/User/UserFields/Details/DetailsDisplay";

interface DetailsEditProfileSectionProps {
	user: IUser;
}

const DetailsEditProfileSection = ({ user }: DetailsEditProfileSectionProps) => {
	const {
		ref,
		openDialog,
		closeDialog,
		register,
		handleSubmit,
		setValue,
		control,
		isValues,
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
			<EditDetailsForm
				user={user}
				ref={ref}
				closeDialog={closeDialog}
				register={register}
				setValue={setValue}
				control={control}
				onSubmit={handleSubmit}
			/>
		</ContentDiv>
	);
};

export default DetailsEditProfileSection;
