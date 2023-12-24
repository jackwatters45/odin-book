import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import formatCity from "./utils/formatCity";
import { IPlaceLived } from "./types/PlacesLivedTypes";
import { ITitleSegment } from "@/utils/render/titleSegment/useRenderTitleSegments";

interface usePlacesLivedProps {
	categoryUrl: string;
	placeLived: IPlaceLived | undefined;
	titlePrefix: string | undefined;
}

const usePlacesLived = ({
	categoryUrl,
	placeLived,
	titlePrefix,
}: usePlacesLivedProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl, param: placeLived?._id });

	const title: ITitleSegment[] | null = placeLived?._id
		? [
				...(titlePrefix ? [{ type: "text", content: titlePrefix } as ITitleSegment] : []),
				{
					type: "bold",
					content: formatCity(placeLived.city, placeLived.state),
				} as ITitleSegment,
		  ]
		: null;

	const defaultSubtitle = placeLived?.startYear && `Moved in ${placeLived.startYear}`;

	return {
		title,
		defaultSubtitle,
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	};
};

export default usePlacesLived;
