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

interface CreatePostButtonProps {
	userFirstName: string;
	userFullName: string;
	userIcon: string | undefined;
}

const CreatePostButton = ({
	userFirstName,
	userFullName,
	userIcon,
}: CreatePostButtonProps) => {
	const {
		currentUserId,
		placeholderText,
		handleClickInput,
		handleOpenDialogPhotos,
		handleOpenDialogFeeling,
		handleOpenDialogCheckIn,
	} = useCreatePostButton({ userFirstName, userFullName });

	return (
		<StyledCreatePostButton>
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
				/>
				<StyledCreateTypeButton
					text="Feeling"
					icon={mdiEmoticonOutline}
					iconSize={1.3}
					iconColor="#eab308"
					colorClass="transparent"
					onClick={handleOpenDialogFeeling}
				/>
				<StyledCreateTypeButton
					text="Check in"
					icon={mdiMapMarker}
					iconSize={1.2}
					iconColor="#ef4444"
					colorClass="transparent"
					onClick={handleOpenDialogCheckIn}
				/>
			</StyledLastRowCreatePost>
		</StyledCreatePostButton>
	);
};

export default CreatePostButton;
