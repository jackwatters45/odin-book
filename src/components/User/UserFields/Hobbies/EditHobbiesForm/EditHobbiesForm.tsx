import { forwardRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import ModalHeader from "@/components/Shared/Dialog/DialogHeader";
import useEditHobbiesForm from "./useEditHobbiesForm";
import HobbiesSearch from "./HobbiesSearch";
import SelectedHobbies from "./SelectedHobbies";
import HobbiesSearchResults from "./HobbiesSearchResults";
import RecommendedHobbies from "./RecommendedHobbies";
import SaveHobbies from "./SaveHobbies";
import {
	StyledContentDiv,
	StyledDialogHobbies,
	StyledHobbiesContainer,
	StyledHobbiesSelectedAndResultsContainer,
	StyledViewMoreContainer,
} from "./EditHobbiesForm.styles";

interface EditHobbiesFormProps {
	hobbies: string[] | undefined;
	hobbiesValue: string[];
	hobbiesRegister: ReturnType<UseFormRegister<FieldValues>>;
	searchRegister: ReturnType<UseFormRegister<FieldValues>>;
	searchValue: string;
	closeDialog: () => void;
}

const EditHobbiesForm = forwardRef<HTMLDialogElement, EditHobbiesFormProps>(
	(
		{ hobbies, hobbiesValue, hobbiesRegister, searchRegister, searchValue, closeDialog },
		ref,
	) => {
		const { isViewMore, handleClickViewMore, isHobbies } = useEditHobbiesForm({
			hobbiesValue,
		});

		return (
			<StyledDialogHobbies ref={ref}>
				<StyledHobbiesContainer>
					<ModalHeader
						title={isHobbies || isViewMore ? "Hobbies" : "Add hobbies"}
						closeDialog={closeDialog}
					/>
					<StyledContentDiv>
						{isViewMore || isHobbies ? (
							<StyledViewMoreContainer>
								<HobbiesSearch register={searchRegister} />
								<StyledHobbiesSelectedAndResultsContainer>
									{!!isHobbies && (
										<SelectedHobbies
											hobbiesValue={hobbiesValue}
											register={hobbiesRegister}
										/>
									)}
									{searchValue && (
										<HobbiesSearchResults
											searchValue={searchValue}
											hobbiesValue={hobbiesValue}
											register={hobbiesRegister}
										/>
									)}
								</StyledHobbiesSelectedAndResultsContainer>
							</StyledViewMoreContainer>
						) : (
							<RecommendedHobbies
								register={hobbiesRegister}
								handleClickViewMore={handleClickViewMore}
							/>
						)}
					</StyledContentDiv>
					<SaveHobbies
						closeDialog={closeDialog}
						initial={hobbies}
						unsavedValue={hobbiesValue}
					/>
				</StyledHobbiesContainer>
			</StyledDialogHobbies>
		);
	},
);

EditHobbiesForm.displayName = "EditHobbiesForm";

export default EditHobbiesForm;
