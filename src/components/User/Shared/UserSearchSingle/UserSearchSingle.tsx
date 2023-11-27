import { UseFormSetValue } from "react-hook-form";
import { HTMLAttributes } from "react";

import StandardTextInput from "@/components/Shared/TextInput/StandardTextInput";
import useUserSearchResults from "./useUserSearchResults";
import { StyledDialogSearchResultsDialog } from "./UserSearch.styles";
import Loading from "@/components/Shared/Loading";
import { SearchResultsType } from "./types/SearchResults";
import { DefaultUserSearch } from "./types/DefaultUserSearch";
import { FormFieldsWithAudience } from "@/types/AudienceSettingsTypes";
import UserSearchResult from "./UserSearchResult";
import { RegisterSearchInput } from "@/hooks/useUserSearch";

interface UserSearchProps extends HTMLAttributes<HTMLDivElement> {
	registerSearchInput: RegisterSearchInput;
	setValue: UseFormSetValue<FormFieldsWithAudience<DefaultUserSearch>>;
	searchResults: SearchResultsType | undefined;
	searchQuery: string | undefined;
	isLoading: boolean;

	labelText: string;
}

const UserSearchSingle = ({
	registerSearchInput,
	setValue,
	searchResults,
	searchQuery,
	isLoading,
	labelText,
	...props
}: UserSearchProps) => {
	const { handleResultClick, isActive, containerRef } = useUserSearchResults({
		setValue,
	});

	return (
		<div ref={containerRef} {...props}>
			<StandardTextInput
				category="values.user.name"
				isSelectedValue={!!searchQuery}
				register={registerSearchInput}
				labelText={labelText}
				onInput={() => setValue("values.user", undefined)}
				autoComplete="off"
			/>
			<StyledDialogSearchResultsDialog open={isActive}>
				{!searchQuery ? (
					<span>Type something to get started</span>
				) : isLoading ? (
					<Loading size={32} speed={0.5} />
				) : searchResults?.length ? (
					searchResults
						.slice(0, 5)
						.map((user) => (
							<UserSearchResult
								key={user._id}
								user={user}
								handleResultClick={handleResultClick}
							/>
						))
				) : (
					<span>No people found</span>
				)}
			</StyledDialogSearchResultsDialog>
		</div>
	);
};

export default UserSearchSingle;
