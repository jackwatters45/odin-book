import formatWorkData from "@/components/User/UserFields/Work/formatWorkValue";
import useUserAboutOverviewItem from "../../UserAboutOverviewItem/useUserAboutOverviewItem";
import { WorkData } from "@/types/IUser";

interface useWorkUserOverviewItemProps {
	work: WorkData | undefined;
}

const useWorkUserOverviewItem = ({ work }: useWorkUserOverviewItemProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "work", param: work?._id });

	const workPretext = formatWorkData({
		work,
		includeCompany: false,
		includePosition: false,
	});
	const workPretextFormatted = `${workPretext} `;

	return {
		workPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	};
};

export default useWorkUserOverviewItem;
