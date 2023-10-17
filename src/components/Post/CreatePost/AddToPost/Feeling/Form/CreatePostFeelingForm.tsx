import { UseFormSetValue } from "react-hook-form";

import DialogHeader from "@/components/Shared/DialogHeader";
import FeelingButton from "./FeelingButton/FeelingButton";
import useCreatePostFeelingForm from "./useCreatePostFeelingForm";
import SearchInput from "@/components/Shared/SearchInput";
import { StyledOtherFormContainer } from "../../../CreatePost.styles";
import { UserSearchContainer } from "../../Tag/Form/CreatePostAddTagForm.styles";
import {
	StyledDialogContent,
	StyledFeelingsContainer,
} from "./CreatePostFeelingForm.styles";
import { FormValues } from "../../../types/CreatePostTypes";

interface CreatePostFeelingFormProps {
	closeForm: () => void;
	setValue: UseFormSetValue<FormValues>;
	currentValue: string;
}

const CreatePostFeelingForm = ({
	closeForm,
	setValue,
	currentValue,
}: CreatePostFeelingFormProps) => {
	const { filteredFeelings, handleClick, handleSearch } = useCreatePostFeelingForm({
		closeForm,
		setValue,
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
