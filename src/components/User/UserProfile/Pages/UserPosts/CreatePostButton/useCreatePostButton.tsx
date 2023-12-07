import useCreatePostContext from "@/components/Post/PostForm/context/usePostFormContext";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { useMatch, useParams } from "react-router";
import useContainerWidth from "../../../context/useContainerWidth";

interface UseCreatePostButtonProps {
	userFirstName: string;
	userFullName: string;
}

const useCreatePostButton = ({
	userFirstName,
	userFullName,
}: UseCreatePostButtonProps) => {
	const containerWidth = useContainerWidth();

	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const currentUserId = useCurrentUserCached()?._id;

	const isDashboard = useMatch("/");
	const isOwnProfile = currentUserId === userId;

	const placeholderText =
		isOwnProfile || isDashboard
			? "What's on your mind?"
			: `Write something to ${userFirstName}...`;

	const { openDialog } = useCreatePostContext();

	const handleOpenDialogDefault = () =>
		openDialog({ initialOpenedState: undefined, initialValues: undefined });

	const handleOpenDialogTo = () =>
		openDialog({
			initialOpenedState: "to",
			initialValues: {
				audience: "Friends",
				to: { _id: userId, fullName: userFullName },
			},
		});

	const handleClickInput = () =>
		isOwnProfile ? handleOpenDialogDefault() : handleOpenDialogTo();

	const handleOpenDialogPhotos = () =>
		openDialog({ initialOpenedState: "photo", initialValues: undefined });

	const handleOpenDialogFeeling = () =>
		openDialog({ initialOpenedState: "feeling", initialValues: undefined });

	const handleOpenDialogCheckIn = () =>
		openDialog({ initialOpenedState: "checkIn", initialValues: undefined });

	return {
		containerWidth,
		currentUserId,
		placeholderText,
		handleClickInput,
		handleOpenDialogPhotos,
		handleOpenDialogFeeling,
		handleOpenDialogCheckIn,
	};
};

export default useCreatePostButton;
