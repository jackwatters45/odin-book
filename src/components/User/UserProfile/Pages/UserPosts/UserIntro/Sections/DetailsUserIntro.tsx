import { IUser } from "@/types/IUser";
import IntroSection from "../IntroSection";
import EditDetailsForm from "@/components/User/UserFields/Details/EditDetailsForm";
import DetailsDisplay from "@/components/User/UserFields/Details/DetailsDisplay";
import useDetails from "@/components/User/UserFields/Details/useDetails";

interface DetailsUserIntroProps {
	user: IUser;
}

const DetailsUserIntro = ({ user }: DetailsUserIntroProps) => {
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
		<IntroSection dataExists={isValues} dataName="Details" handleClickButton={openDialog}>
			<DetailsDisplay user={user} isValues={isValues} />
			<EditDetailsForm
				ref={ref}
				user={user}
				register={register}
				onSubmit={handleSubmit}
				setValue={setValue}
				control={control}
				closeDialog={closeDialog}
			/>
		</IntroSection>
	);
};

export default DetailsUserIntro;
