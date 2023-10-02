import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import useFamilyMemberSearch from "./useFamilyMemberSearch";
import { ImageCircle } from "@/components/Nav/Nav.styles";
import { defaultUserAvatar } from "@/config/globals";
import { UserAboutFormFields } from "@/components/Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/StandardUserOverviewForm";
import { FamilyMemberSearch, SearchResultsType } from "../useAboutFamilyMembers";
import {
	StyledDialogFamilyMembers,
	StyledSearchResult,
} from "./FamilyMemberSearch.styles";
import Loading from "@/components/Shared/Loading";

interface FamilyMemberSearchProps {
	register: ReturnType<UseFormRegister<FieldValues>>;
	setValue: UseFormSetValue<UserAboutFormFields<FamilyMemberSearch>>;
	searchResults: SearchResultsType | undefined;
	searchQuery: string | undefined;
	isLoading: boolean;
}

const FamilyMemberSearch = ({
	register,
	setValue,
	searchResults,
	searchQuery,
	isLoading,
}: FamilyMemberSearchProps) => {
	const { handleResultClick, isActive, containerRef } = useFamilyMemberSearch({
		setValue,
	});

	return (
		<div ref={containerRef}>
			<AboutOverviewTextInput
				category="values.user.name"
				isSelectedValue={!!searchQuery}
				register={register}
				labelText={"Family Member"}
				onInput={() => setValue("values.user", undefined)}
				autoComplete="off"
			/>
			<StyledDialogFamilyMembers open={isActive}>
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
			</StyledDialogFamilyMembers>
		</div>
	);
};

export default FamilyMemberSearch;
