import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { IPlaceLived } from "@/types/IUser";
import formatCity from "./utils/formatCity";
import { TitleSegment } from "@/components/User/Shared/UserAboutOverviewItem/UserAboutOverviewItem";

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

export default usePlacesLived;
