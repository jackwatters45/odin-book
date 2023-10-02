import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { IRelationshipStatus } from "@/components/User/UserFields/RelationshipStatus/types/IRelationshipStatus";
import useUserSearch from "@/components/Shared/UserSearch/useUserSearch";
import { IRelationshipSearch } from "../types/IRelationshipSearch";

interface UseRelationshipUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: IRelationshipStatus | undefined;
	handleCloseForm: () => void;
}

const useRelationshipUserOverviewForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: UseRelationshipUserOverviewFormProps) => {
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

export default useRelationshipUserOverviewForm;
