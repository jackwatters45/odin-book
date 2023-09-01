import HobbiesDisplay from "./HobbiesDisplay";
import HobbiesHeader from "../../EditProfileSectionHeader";
import HobbiesSearch from "./HobbiesSearch";
import SelectedHobbies from "./SelectedHobbies";
import HobbiesSearchResults from "./HobbiesSearchResults";
import RecommendedHobbies from "./RecommendedHobbies";
import BottomControls from "./BottomControls";
import useHobbiesEditProfileSection from "./useHobbiesEditProfileSection";

import ModalHeader from "@/components/Shared/ModalHeader";
import { ContentDiv } from "../../EditProfile.styles";
import {
	StyledDialogHobbies,
	StyledHobbiesContainer,
	StyledViewMoreContainer,
	StyledContentDiv,
	StyledHobbiesSelectedAndResultsContainer,
} from "./HobbiesEditProfileSection.styles";

interface HobbiesEditProfileSectionProps {
	hobbies?: string[];
}

const HobbiesEditProfileSection = ({ hobbies }: HobbiesEditProfileSectionProps) => {
	const {
		ref,
		openDialog,
		handleCancel,
		closeDialog,
		register,
		hobbiesValue,
		isHobbies,
		isViewMore,
		handleClickViewMore,
		searchValue,
	} = useHobbiesEditProfileSection(hobbies);

	return (
		<ContentDiv>
			<HobbiesHeader title={"Hobbies"} openDialog={openDialog} isData={isHobbies} />
			<HobbiesDisplay
				isHobbies={isHobbies}
				hobbiesValue={hobbiesValue}
				register={register("hobbies")}
			/>
			<StyledDialogHobbies ref={ref}>
				<StyledHobbiesContainer>
					<ModalHeader
						title={isHobbies || isViewMore ? "Hobbies" : "Add hobbies"}
						closeDialog={handleCancel}
					/>
					<StyledContentDiv>
						{isViewMore || isHobbies ? (
							<StyledViewMoreContainer>
								<HobbiesSearch register={register("search")} />
								<StyledHobbiesSelectedAndResultsContainer>
									{!!isHobbies && (
										<SelectedHobbies
											hobbiesValue={hobbiesValue}
											register={register("hobbies")}
										/>
									)}
									{searchValue && (
										<HobbiesSearchResults
											searchValue={searchValue}
											hobbiesValue={hobbiesValue}
											register={register("hobbies")}
										/>
									)}
								</StyledHobbiesSelectedAndResultsContainer>
							</StyledViewMoreContainer>
						) : (
							<RecommendedHobbies
								register={register("hobbies")}
								handleClickViewMore={handleClickViewMore}
							/>
						)}
					</StyledContentDiv>
					<BottomControls
						initialHobbies={hobbies}
						handleCancel={handleCancel}
						hobbiesValue={hobbiesValue}
						closeDialog={closeDialog}
					/>
				</StyledHobbiesContainer>
			</StyledDialogHobbies>
		</ContentDiv>
	);
};

export default HobbiesEditProfileSection;
