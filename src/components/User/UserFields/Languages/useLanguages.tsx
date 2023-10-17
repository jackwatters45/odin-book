import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import formatList from "@/utils/format/formatList";

interface useLanguagesParams {
	languages: string[] | undefined;
}

const useLanguages = ({ languages }: useLanguagesParams) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "languages", param: undefined });

	const formattedLanguages = formatList(languages);

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
		formattedLanguages,
	};
};

export default useLanguages;
