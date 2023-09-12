import HobbiesHeader from "../../EditProfileSectionHeader";

import { ContentDiv } from "../../EditProfile.styles";
import HobbiesDisplay from "@/components/User/UserFields/Hobbies/HobbiesDisplay";
import useHobbies from "@/components/User/UserFields/Hobbies/useHobbies";
import { lazy } from "react";

const EditHobbiesForm = lazy(
	() => import("@/components/User/UserFields/Hobbies/EditHobbiesForm"),
);

interface HobbiesEditProfileSectionProps {
	hobbies?: string[];
}

const HobbiesEditProfileSection = ({ hobbies }: HobbiesEditProfileSectionProps) => {
	const {
		ref,
		openDialog,
		closeDialog,
		register,
		hobbiesValue,
		searchValue,
		LazyWrapper,
	} = useHobbies(hobbies);

	return (
		<ContentDiv>
			<HobbiesHeader title={"Hobbies"} openDialog={openDialog} isData={!!hobbies} />
			<HobbiesDisplay hobbiesValue={hobbiesValue} register={register("hobbies")} />
			<LazyWrapper>
				<EditHobbiesForm
					ref={ref}
					hobbies={hobbies}
					hobbiesValue={hobbiesValue}
					hobbiesRegister={register("hobbies")}
					searchRegister={register("search")}
					searchValue={searchValue}
					closeDialog={closeDialog}
				/>
			</LazyWrapper>
		</ContentDiv>
	);
};

export default HobbiesEditProfileSection;
