import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";
import { IRelationshipSearch, IRelationshipStatus } from "../types/RelationshipTypes";
import useUserSearchSingle from "@/components/User/Shared/UserSearchSingle/useUserSearchSingle";

interface UseRelationshipFormProps {
	audience: AudienceStatusOptions;
	initialValues: IRelationshipStatus | undefined;
	handleCloseForm: () => void;
}

const useRelationshipForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: UseRelationshipFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm<IRelationshipSearch>({
			audience,
			initialValues: {
				search: initialValues?.user?.fullName,
				status: initialValues?.status,
				user: initialValues?.user?._id,
				startYear: initialValues?.startYear,
				startMonth: initialValues?.startMonth,
				startDay: initialValues?.startDay,
			},
			url: "relationship",
			method: "PATCH",
			handleCloseForm,
		});

	// search
	const { registerSearchInput, searchQuery, searchResults, isLoading, isSearchValid } =
		useUserSearchSingle({
			audience,
			initialValues,
			formValues,
			urlEnding: "friends",
		});

	const status = formValues.values?.status;
	const statusExists = !!status;

	const isValid = (isSearchValid || status === "single") && statusExists;

	const showSearch = status !== "single" && !!status;

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		registerSearchInput,
		searchQuery,
		searchResults,
		isLoading,
		isValid,
		showSearch,
	};
};

export default useRelationshipForm;
