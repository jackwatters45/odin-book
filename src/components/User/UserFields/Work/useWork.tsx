import formatWorkData from "@/components/User/UserFields/Work/utils/formatWorkValue";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { TitleSegment } from "@/components/Shared/UserAboutOverviewItem/UserAboutOverviewItem";
import { IWork } from "./types/WorkTypes";

interface useWorkProps {
	work: IWork | undefined;
}

const useWork = ({ work }: useWorkProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "work", param: work?._id });

	const workPretext = formatWorkData({
		work,
		includeCompany: false,
		includePosition: false,
	});
	const workPretextFormatted = `${workPretext} `;

	const title = work?.company
		? [
				{ type: "text", content: workPretextFormatted } as TitleSegment,
				{ type: "bold", content: work.company } as TitleSegment,
		  ]
		: null;

	return {
		title,

		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	};
};

export default useWork;
