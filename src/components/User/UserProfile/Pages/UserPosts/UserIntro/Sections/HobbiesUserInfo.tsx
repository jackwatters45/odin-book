import { Suspense, lazy } from "react";

import IntroSection from "../IntroSection";
import HobbiesDisplay from "@/components/User/UserFields/Hobbies/HobbiesDisplay";
import useHobbies from "@/components/User/UserFields/Hobbies/useHobbies";

const EditHobbiesForm = lazy(
	() => import("@/components/User/UserFields/Hobbies/EditHobbiesForm"),
);

interface HobbiesUserIntroProps {
	hobbies: string[] | undefined;
}

const HobbiesUserIntro = ({ hobbies }: HobbiesUserIntroProps) => {
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

export default HobbiesUserIntro;
