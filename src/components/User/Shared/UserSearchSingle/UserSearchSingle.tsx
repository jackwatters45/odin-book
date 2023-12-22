import { UseFormSetValue } from "react-hook-form";
import { HTMLAttributes } from "react";

import StandardTextInput from "@/components/Shared/TextInput/StandardTextInput";
import useUserSearchResults from "./useUserSearchResults";
import {
	StyledDialogSearchResultsDialog,
	StyledNoResultsText,
} from "./UserSearch.styles";
import Loading from "@/components/Shared/Loading";
import { SearchResultsType } from "./types/SearchResults";
import { DefaultUserSearch } from "./types/DefaultUserSearch";
import UserSearchResult from "./UserSearchResult";
import { RegisterSearchInput, UserSearchInput } from "@/hooks/misc/useUserSearch";

interface UserSearchProps extends HTMLAttributes<HTMLDivElement> {
	registerSearchInput: RegisterSearchInput;
	setValue: UseFormSetValue<DefaultUserSearch>;
	setSearchValue: UseFormSetValue<UserSearchInput>;
	searchResults: SearchResultsType | undefined;
	searchQuery: string | undefined;
	isLoading: boolean;
	labelText: string;
}

const UserSearchSingle = ({
	registerSearchInput,
	setValue,
	setSearchValue,
	searchResults,
	searchQuery,
	isLoading,
	labelText,
	...props
}: UserSearchProps) => {
	const { handleResultClick, isActive, containerRef } = useUserSearchResults({
		setValue,
		setSearchValue,
	});

	return (
		<div ref={containerRef} {...props}>
			<StandardTextInput
				category="user.name"
				isSelectedValue={!!searchQuery}
				register={registerSearchInput}
				labelText={labelText}
				onInput={() => setValue("user", undefined)}
				autoComplete="off"
			/>
			<StyledDialogSearchResultsDialog open={isActive}>
				{!searchQuery ? (
					<StyledNoResultsText>Type something to get started</StyledNoResultsText>
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
					<StyledNoResultsText>No people found</StyledNoResultsText>
				)}
			</StyledDialogSearchResultsDialog>
		</div>
	);
};

export default UserSearchSingle;
