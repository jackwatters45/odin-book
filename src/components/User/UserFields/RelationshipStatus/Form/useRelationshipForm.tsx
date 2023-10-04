import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserOverviewForm from "../../../Shared/StandardUserOverviewForm/useStandardUserOverviewForm";
import { IRelationshipSearch, IRelationshipStatus } from "../types/RelationshipTypes";
import useUserSearch from "@/components/User/Shared/UserSearch/useUserSearch";

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
		useUserOverviewForm<IRelationshipSearch>({
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
	const { searchQuery, searchResults, isLoading, isSearchValid } = useUserSearch({
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
		searchQuery,
		searchResults,
		isLoading,
		isValid,
		showSearch,
	};
};

export default useRelationshipForm;
