import HobbiesHeader from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfileSectionHeader";

import { ContentDiv } from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfile.styles";
import HobbiesDisplay from "@/components/User/UserFields/Hobbies/HobbiesDisplay";
import useHobbies from "@/components/User/UserFields/Hobbies/useHobbies";
import { Suspense, lazy } from "react";

const EditHobbiesForm = lazy(
	() => import("@/components/User/UserFields/Hobbies/EditHobbiesForm"),
);

interface EditProfileHobbiesProps {
	hobbies?: string[];
}

const EditProfileHobbies = ({ hobbies }: EditProfileHobbiesProps) => {
	const { ref, openDialog, closeDialog, register, hobbiesValue, searchValue } =
		useHobbies(hobbies);

	return (
		<ContentDiv>
			<HobbiesHeader title={"Hobbies"} openDialog={openDialog} isData={!!hobbies} />
			<HobbiesDisplay hobbiesValue={hobbies} register={register("hobbies")} />
			<Suspense>
				<EditHobbiesForm
					ref={ref}
					hobbies={hobbies}
					hobbiesValue={hobbiesValue}
					hobbiesRegister={register("hobbies")}
					searchRegister={register("search")}
					searchValue={searchValue}
					closeDialog={closeDialog}
				/>
			</Suspense>
		</ContentDiv>
	);
};

export default EditProfileHobbies;
