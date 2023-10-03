import useUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { AboutFamilyMembersFormProps } from "./AboutFamilyMembersForm";
import { DefaultUserSearch } from "../../../../Shared/UserSearch/types/DefaultUserSearch";
import useUserSearch from "../../../../Shared/UserSearch/useUserSearch";

interface FamilyMemberSearch extends DefaultUserSearch {
	relationship?: string;
}

const useAboutFamilyMembersForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutFamilyMembersFormProps) => {
	// family member form
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<FamilyMemberSearch>({
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
	const { searchQuery, searchResults, isLoading, isSearchValid } = useUserSearch({
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
		searchResults,
		searchQuery,
		isLoading,
		isValid,
	};
};

export default useAboutFamilyMembersForm;
