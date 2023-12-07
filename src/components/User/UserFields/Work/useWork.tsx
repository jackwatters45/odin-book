import formatWorkData from "@/components/User/UserFields/Work/utils/formatWorkValue";
import useUserAboutOverviewItem from "../../Shared/SingleUserProperty/useSingleUserProperty";
import { IWork } from "./types/WorkTypes";
import { ITitleSegment } from "@/utils/render/titleSegment/useRenderTitleSegments";

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
				{ type: "text", content: workPretextFormatted } as ITitleSegment,
				{ type: "bold", content: work.company } as ITitleSegment,
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
