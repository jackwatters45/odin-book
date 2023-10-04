import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { INamePronunciation } from "./types/NamePronunciationTypes";
import getFullName from "./utils/getFullName";
import { TitleSegment } from "@/components/Shared/UserAboutOverviewItem/UserAboutOverviewItem";

interface IUseNamePronunciation {
	initialValues: INamePronunciation | undefined;
}

const useNamePronunciation = ({ initialValues }: IUseNamePronunciation) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "name-pronunciation", param: undefined });

	const fullName = getFullName(
		initialValues?.firstName,
		initialValues?.lastName,
	) as string;

	const title = initialValues
		? ([{ type: "text", content: fullName }] as TitleSegment[])
		: null;

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
		title,
	};
};

export default useNamePronunciation;
