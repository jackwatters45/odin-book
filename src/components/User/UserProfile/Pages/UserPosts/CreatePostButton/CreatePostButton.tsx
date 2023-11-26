import { mdiEmoticonOutline, mdiImageMultiple, mdiMapMarker } from "@mdi/js";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import {
	StyledCreatePostButton,
	StyledCreateTypeButton,
	StyledFirstRowCreatePost,
	StyledLastRowCreatePost,
	StyledSearchInputCreatePost,
} from "./CreatePostButton.styles";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import useCreatePostButton from "./useCreatePostButton";
import { Link } from "react-router-dom";
import { HTMLAttributes } from "react";

interface CreatePostButtonProps extends HTMLAttributes<HTMLDivElement> {
	userFirstName: string;
	userFullName: string;
	userIcon: string | undefined;
}

const CreatePostButton = ({
	userFirstName,
	userFullName,
	userIcon,
	...props
}: CreatePostButtonProps) => {
	const {
		containerWidth,
		currentUserId,
		placeholderText,
		handleClickInput,
		handleOpenDialogPhotos,
		handleOpenDialogFeeling,
		handleOpenDialogCheckIn,
	} = useCreatePostButton({ userFirstName, userFullName });

	return (
		<StyledCreatePostButton {...props}>
			<StyledFirstRowCreatePost>
				<Link to={`/user/${currentUserId}`}>
					<ImageCircle src={userIcon || defaultUserAvatar} alt={"User icon"} />
				</Link>
				<StyledSearchInputCreatePost onClick={handleClickInput}>
					<span>{placeholderText}</span>
				</StyledSearchInputCreatePost>
			</StyledFirstRowCreatePost>
			<StyledLastRowCreatePost>
				<StyledCreateTypeButton
					text="Photo"
					icon={mdiImageMultiple}
					iconSize={1.2}
					iconColor="#22c55e"
					colorClass="transparent"
					onClick={handleOpenDialogPhotos}
					$containerWidth={containerWidth}
				/>
				<StyledCreateTypeButton
					text="Feeling"
					icon={mdiEmoticonOutline}
					iconSize={1.3}
					iconColor="#eab308"
					colorClass="transparent"
					onClick={handleOpenDialogFeeling}
					$containerWidth={containerWidth}
				/>
				<StyledCreateTypeButton
					text="Check in"
					icon={mdiMapMarker}
					iconSize={1.2}
					iconColor="#ef4444"
					colorClass="transparent"
					onClick={handleOpenDialogCheckIn}
					$containerWidth={containerWidth}
				/>
			</StyledLastRowCreatePost>
		</StyledCreatePostButton>
	);
};

export default CreatePostButton;
