import { UseFormSetValue } from "react-hook-form";

import DialogHeader from "@/components/Shared/DialogHeader";
import { StyledOtherFormContainer } from "../../../CreatePost.styles";
import SearchInput from "@/components/Shared/SearchInput";
import Loading from "@/components/Shared/Loading";
import useCreatePostAddTagForm from "./useCreatePostAddTagForm";
import TaggedUser from "./TaggedUser";
import { TaggedUserType } from "./types/TagTypes";
import StandardButton from "@/components/Shared/StandardButton";
import { StyledUppercaseGreyText } from "@/styles/SharedStyles";
import UserSearchResult from "@/components/User/Shared/UserSearchSingle/UserSearchResult";
import {
	StyledDialogContent,
	StyledNoneFoundText,
	StyledSearchResults,
	StyledSearchResultsContainer,
	StyledTaggedUsers,
	StyledTaggedUsersContainer,
	UserSearchContainer,
} from "./CreatePostAddTagForm.styles";
import { FormValues } from "../../../types/CreatePostTypes";

interface CreatePostAddTagFormProps {
	closeForm: () => void;
	setValue: UseFormSetValue<FormValues>;
	taggedUsers: TaggedUserType[];
}

const CreatePostAddTagForm = ({
	closeForm,
	setValue,
	taggedUsers,
}: CreatePostAddTagFormProps) => {
	const {
		registerSearchInput,
		searchQuery,
		searchResults,
		isLoading,
		handleAddTaggedUser,
		handleRemoveTaggedUser,
	} = useCreatePostAddTagForm({
		setValue,
		taggedUsers,
	});

	return (
		<StyledOtherFormContainer>
			<DialogHeader
				title={"Tag people"}
				closeDialog={closeForm}
				buttonActionType="back"
			/>
			<StyledDialogContent>
				<UserSearchContainer>
					<SearchInput
						id="post-tag-search"
						placeholder="Search for friends"
						register={registerSearchInput}
					/>
					<StandardButton colorClass="transparent-blue" text="Done" onClick={closeForm} />
				</UserSearchContainer>
				{taggedUsers.length > 0 && (
					<StyledTaggedUsersContainer>
						<StyledUppercaseGreyText>Tagged</StyledUppercaseGreyText>
						<StyledTaggedUsers>
							{taggedUsers.map((user) => (
								<TaggedUser
									key={user._id}
									user={user}
									removeTaggedUser={() => handleRemoveTaggedUser(user)}
								/>
							))}
						</StyledTaggedUsers>
					</StyledTaggedUsersContainer>
				)}
				<StyledSearchResultsContainer>
					<StyledUppercaseGreyText>
						{searchQuery ? "Search" : "Suggestions"}
					</StyledUppercaseGreyText>
					<StyledSearchResults>
						{isLoading ? (
							<Loading size={32} speed={0.5} />
						) : searchResults?.length ? (
							searchResults
								.slice(0, 10)
								.map((user) => (
									<UserSearchResult
										key={user._id}
										user={user}
										handleResultClick={() => handleAddTaggedUser(user)}
									/>
								))
						) : (
							<StyledNoneFoundText>No people found</StyledNoneFoundText>
						)}
					</StyledSearchResults>
				</StyledSearchResultsContainer>
			</StyledDialogContent>
		</StyledOtherFormContainer>
	);
};

export default CreatePostAddTagForm;
