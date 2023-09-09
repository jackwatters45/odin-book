import HobbiesHeader from "../../EditProfileSectionHeader";

import { ContentDiv } from "../../EditProfile.styles";

import EditHobbiesForm from "@/components/User/UserFields/Hobbies/EditHobbiesForm/EditHobbiesForm";
import HobbiesDisplay from "@/components/User/UserFields/Hobbies/HobbiesDisplay";
import useHobbies from "@/components/User/UserFields/Hobbies/useHobbies";

interface HobbiesEditProfileSectionProps {
	hobbies?: string[];
}

const HobbiesEditProfileSection = ({ hobbies }: HobbiesEditProfileSectionProps) => {
	const { ref, openDialog, closeDialog, register, hobbiesValue, searchValue } =
		useHobbies(hobbies);

	return (
		<ContentDiv>
			<HobbiesHeader title={"Hobbies"} openDialog={openDialog} isData={!!hobbies} />
			<HobbiesDisplay hobbiesValue={hobbiesValue} register={register("hobbies")} />
			<EditHobbiesForm
				ref={ref}
				hobbies={hobbies}
				hobbiesValue={hobbiesValue}
				hobbiesRegister={register("hobbies")}
				searchRegister={register("search")}
				searchValue={searchValue}
				closeDialog={closeDialog}
			/>
		</ContentDiv>
	);
};

export default HobbiesEditProfileSection;
