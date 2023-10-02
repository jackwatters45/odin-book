import { isEqual } from "lodash";
import useUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { AboutFamilyMembersFormProps } from "./AboutFamilyMembersForm";

import useSearch from "@/hooks/useSearch";
import useCurrentUser from "@/hooks/useCurrentUser";

type SearchResult = { _id: string; avatarUrl: string; fullName: string };

type SearchJsonResponse = {
	users: SearchResult[];
};

export type SearchResultsType = SearchResult[];

export type FamilyMemberSearch = {
	user: string | undefined;
	name: string | undefined;
	relationship: string | undefined;
};

const useAboutFamilyMembersForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutFamilyMembersFormProps) => {
	const { user } = useCurrentUser();

	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<FamilyMemberSearch>({
			audience,
			initialValues: {
				user: initialValues?.user._id,
				name: initialValues?.user.fullName,
				relationship: initialValues?.relationship,
			},
			url: "family-members",
			method: initialValues ? "PATCH" : "POST",
			param: initialValues?._id,
			handleCloseForm,
		});

	const searchQuery = formValues.values?.name;
	const { searchResults, isLoading } = useSearch<SearchJsonResponse, SearchResultsType>({
		searchQuery,
		queryKey: ["users", user?._id, "search", searchQuery],
		queryUrl: "users/search/friends-not-family",
		transformData: (data) => data.users,
		options: { staleTime: 60000, cacheTime: 60000 },
	});

	const isChanged =
		!isEqual(formValues.values, initialValues) || audience !== formValues.audience;

	const allFieldsExist =
		!!formValues.values?.relationship &&
		!!formValues.values?.name &&
		!!formValues.values?.user;

	const isValid = isChanged && allFieldsExist;

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
