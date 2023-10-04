import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { HTMLAttributes } from "react";

import AboutOverviewTextInput from "@/components/Shared/TextInput/AboutOverviewTextInput";
import useUserSearchResults from "./useUserSearchResults";
import { ImageCircle } from "@/components/Nav/Nav.styles";
import { StyledDialogSearchResultsDialog, StyledSearchResult } from "./UserSearch.styles";
import Loading from "@/components/Shared/Loading";
import { SearchResultsType } from "./types/SearchResults";
import { DefaultUserSearch } from "./types/DefaultUserSearch";
import { FormFieldsWithAudience } from "@/types/AudienceSettingsTypes";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";

interface UserSearchProps extends HTMLAttributes<HTMLDivElement> {
	register: ReturnType<UseFormRegister<FieldValues>>;
	setValue: UseFormSetValue<FormFieldsWithAudience<DefaultUserSearch>>;
	searchResults: SearchResultsType | undefined;
	searchQuery: string | undefined;
	isLoading: boolean;

	labelText: string;
}

const UserSearch = ({
	register,
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
			<AboutOverviewTextInput
				category="values.user.name"
				isSelectedValue={!!searchQuery}
				register={register}
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
					searchResults?.slice(0, 5).map((user) => {
						return (
							<StyledSearchResult
								key={user._id}
								onClick={() => handleResultClick(user._id, user.fullName)}
							>
								<span>
									<ImageCircle
										src={user.avatarUrl || defaultUserAvatar}
										alt="icon"
										size={40}
									/>
								</span>
								<span>{user.fullName}</span>
							</StyledSearchResult>
						);
					})
				) : (
					<span>No people found</span>
				)}
			</StyledDialogSearchResultsDialog>
		</div>
	);
};

export default UserSearch;
