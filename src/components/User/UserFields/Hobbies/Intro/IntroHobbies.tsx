import { Suspense, lazy } from "react";

import IntroSection from "../../../UserProfile/Pages/UserPosts/UserIntro/IntroSection";
import HobbiesDisplay from "@/components/User/UserFields/Hobbies/HobbiesDisplay";
import useHobbies from "@/components/User/UserFields/Hobbies/useHobbies";

const EditHobbiesForm = lazy(
	() => import("@/components/User/UserFields/Hobbies/EditHobbiesForm"),
);

interface IntroHobbiesProps {
	hobbies: string[] | undefined;
}

const IntroHobbies = ({ hobbies }: IntroHobbiesProps) => {
	const { ref, openDialog, closeDialog, register, hobbiesValue, searchValue } =
		useHobbies(hobbies);

	return (
		<IntroSection
			dataExists={!!hobbies}
			dataName="Hobbies"
			handleClickButton={openDialog}
		>
			<HobbiesDisplay hobbiesValue={hobbiesValue} register={register("hobbies")} />
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
		</IntroSection>
	);
};

export default IntroHobbies;
