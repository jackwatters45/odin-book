import useUserForm from "../../../Shared/UserForm/useUserForm";
import { FamilyMembersFormProps } from "./FamilyMembersForm";
import { DefaultUserSearch } from "../../../Shared/UserSearchSingle/types/DefaultUserSearch";
import useUserSearchSingle from "../../../Shared/UserSearchSingle/useUserSearchSingle";

interface FamilyMemberSearch extends DefaultUserSearch {
	relationship?: string;
}

const useFamilyMembersForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: FamilyMembersFormProps) => {
	// family member form
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm<FamilyMemberSearch>({
			audience,
			initialValues: {
				user: initialValues?.user._id,
				search: initialValues?.user.fullName,
				relationship: initialValues?.relationship,
			},
			url: "family-members",
			method: initialValues ? "PATCH" : "POST",
			param: initialValues?._id,
			handleCloseForm,
		});

	// search
	const { registerSearchInput, searchQuery, searchResults, isLoading, isSearchValid } =
		useUserSearchSingle({
			audience,
			initialValues,
			formValues,
			urlEnding: "friends-not-family",
		});

	const relationshipFieldsExist = !!formValues.values?.relationship;

	const isValid = isSearchValid && relationshipFieldsExist;

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		registerSearchInput,
		searchResults,
		searchQuery,
		isLoading,
		isValid,
	};
};

export default useFamilyMembersForm;
