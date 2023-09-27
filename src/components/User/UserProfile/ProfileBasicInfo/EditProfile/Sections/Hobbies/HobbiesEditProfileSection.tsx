import HobbiesHeader from "../../EditProfileSectionHeader";

import { ContentDiv } from "../../EditProfile.styles";
import HobbiesDisplay from "@/components/User/UserFields/Hobbies/HobbiesDisplay";
import useHobbies from "@/components/User/UserFields/Hobbies/useHobbies";
import { Suspense, lazy } from "react";

const EditHobbiesForm = lazy(
	() => import("@/components/User/UserFields/Hobbies/EditHobbiesForm"),
);

interface HobbiesEditProfileSectionProps {
	hobbies?: string[];
}

const HobbiesEditProfileSection = ({ hobbies }: HobbiesEditProfileSectionProps) => {
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

export default HobbiesEditProfileSection;
