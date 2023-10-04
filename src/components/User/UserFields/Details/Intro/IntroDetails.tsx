import { Suspense, lazy } from "react";

import { IUser } from "@/types/IUser";
import IntroSection from "../../../UserProfile/Pages/UserPosts/UserIntro/IntroSection";
import DetailsDisplay from "@/components/User/UserFields/Details/DetailsDisplay";
import useDetails from "@/components/User/UserFields/Details/useDetails";

const EditDetailsForm = lazy(
	() => import("@/components/User/UserFields/Details/EditDetailsForm"),
);

interface IntroDetailsProps {
	user: IUser;
}

const IntroDetails = ({ user }: IntroDetailsProps) => {
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
		closeParentDialog: undefined,
	});

	return (
		<IntroSection dataExists={isValues} dataName="Details" handleClickButton={openDialog}>
			<DetailsDisplay user={user} isValues={isValues} />
			<Suspense>
				<EditDetailsForm
					ref={ref}
					user={user}
					register={register}
					onSubmit={handleSubmit}
					setValue={setValue}
					control={control}
					closeDialog={closeDialog}
					closeAllDialogs={closeDialog}
				/>
			</Suspense>
		</IntroSection>
	);
};

export default IntroDetails;
