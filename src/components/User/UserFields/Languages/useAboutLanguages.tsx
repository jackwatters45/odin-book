import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import displayLanguages from "./utils/displayLanguages";

interface UseAboutLanguagesParams {
	languages: string[] | undefined;
}

const useAboutLanguages = ({ languages }: UseAboutLanguagesParams) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "languages", param: undefined });

	const formattedLanguages = displayLanguages(languages);

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
		formattedLanguages,
	};
};

export default useAboutLanguages;
