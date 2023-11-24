import { IUser } from "@/types/IUser";
import IntroSection from "../../../UserProfile/Pages/UserPosts/UserIntro/IntroSection";
import DetailsDisplay from "@/components/User/UserFields/Details/DetailsDisplay";
import useDetails from "@/components/User/UserFields/Details/useDetails";

import EditDetailsForm from "@/components/User/UserFields/Details/EditDetailsForm";

interface IntroDetailsProps {
	user: IUser;
}

const IntroDetails = ({ user }: IntroDetailsProps) => {
	const {
		ref,
		openDialog,
		closeDialogAndReset,
		isOpen,
		register,
		submitForm,
		setValue,
		control,
		isValues,
	} = useDetails({
		user,
		closeParentDialog: undefined,
	});

	return (
		<IntroSection dataExists={isValues} dataName="Details" handleClickButton={openDialog}>
			<DetailsDisplay user={user} isValues={isValues} />
			{isOpen && (
				<EditDetailsForm
					ref={ref}
					user={user}
					register={register}
					onSubmit={submitForm}
					setValue={setValue}
					control={control}
					closeDialog={closeDialogAndReset}
					closeAllDialogs={closeDialogAndReset}
				/>
			)}
		</IntroSection>
	);
};

export default IntroDetails;
