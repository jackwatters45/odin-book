import { UseFormSetValue } from "react-hook-form";

import DialogHeader from "@/components/Shared/DialogHeader";
import FeelingButton from "./FeelingButton/FeelingButton";
import useCreatePostFeelingForm from "./useCreatePostFeelingForm";
import SearchInput from "@/components/Shared/SearchInput";
import { StyledOtherFormContainer } from "../../../PostForm.styles";
import { UserSearchContainer } from "../../Tag/Form/CreatePostAddTagForm.styles";
import {
	StyledDialogContent,
	StyledFeelingsContainer,
} from "./CreatePostFeelingForm.styles";
import { PostFormValues } from "../../../types/PostFormTypes";

interface CreatePostFeelingFormProps {
	closeForm: () => void;
	setValue: UseFormSetValue<PostFormValues>;
	currentValue: string | undefined;
}

const CreatePostFeelingForm = ({
	closeForm,
	setValue,
	currentValue,
}: CreatePostFeelingFormProps) => {
	const { filteredFeelings, handleClick, handleSearch } = useCreatePostFeelingForm({
		closeForm,
		setValue,
		currentValue,
	});

	return (
		<StyledOtherFormContainer>
			<DialogHeader
				title={"How are you feeling?"}
				closeDialog={closeForm}
				buttonActionType="back"
			/>
			<StyledDialogContent>
				<UserSearchContainer>
					<SearchInput
						id="post-feeling-search"
						placeholder="Search"
						onChange={handleSearch}
						register={undefined}
					/>
				</UserSearchContainer>
				<StyledFeelingsContainer>
					{filteredFeelings.map((feeling) => (
						<FeelingButton
							key={feeling.name}
							feeling={feeling}
							handleClick={handleClick}
							isActive={currentValue === feeling.name}
						/>
					))}
				</StyledFeelingsContainer>
			</StyledDialogContent>
		</StyledOtherFormContainer>
	);
};

export default CreatePostFeelingForm;
