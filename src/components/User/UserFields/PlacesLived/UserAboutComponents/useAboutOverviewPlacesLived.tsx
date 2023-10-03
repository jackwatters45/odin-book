import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { PlaceLivedData } from "@/types/IUser";
import formatCity from "../utils/formatCity";
import { TitleSegment } from "@/components/Shared/UserAboutOverviewItem/UserAboutOverviewItem";

interface AboutOverviewPlacesLivedProps {
	categoryUrl: string;
	placeLived: PlaceLivedData | undefined;
	titlePrefix: string | undefined;
}

const useAboutOverviewPlacesLived = ({
	categoryUrl,
	placeLived,
	titlePrefix,
}: AboutOverviewPlacesLivedProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl, param: placeLived?._id });

	const title: TitleSegment[] | null = placeLived?._id
		? [
				...(titlePrefix ? [{ type: "text", content: titlePrefix } as TitleSegment] : []),
				{
					type: "bold",
					content: formatCity(placeLived.city, placeLived.state),
				} as TitleSegment,
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

export default useAboutOverviewPlacesLived;
