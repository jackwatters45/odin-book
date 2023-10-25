import {
	mdiBookmark,
	mdiBookmarkOutline,
	mdiEarth,
	mdiEye,
	mdiPencilOutline,
	mdiTrashCanOutline,
} from "@mdi/js";

import { MoreOptionsOptions } from "../types/MoreOptionTypes";
import {
	StyledDialogMoreOptionsContent,
	StyledDialogMoreOptionsItem,
} from "./MoreOptionsContent.styles";

interface MoreOptionsContentProps {
	categoryName: string;
	isSaved?: boolean;
	options: MoreOptionsOptions | undefined;
	saveMutation: (() => void) | undefined;
	openForm: (() => void) | undefined;
	openView?: (() => void) | undefined;
	openAudienceForm: (() => void) | undefined;
	deleteMutation: (() => void) | undefined;
	handleDelete: (() => void) | undefined;
}

const MoreOptionsContent = ({
	categoryName,
	isSaved,
	options,
	saveMutation,
	openView,
	openForm,
	openAudienceForm,
	deleteMutation,
	handleDelete,
}: MoreOptionsContentProps) => {
	return (
		<StyledDialogMoreOptionsContent>
			{options &&
				options.map((option) => (
					<StyledDialogMoreOptionsItem
						key={option.text}
						colorClass="transparent"
						text={option.text}
						icon={option.icon}
						onClick={option.onClick}
					/>
				))}
			{saveMutation && (
				<StyledDialogMoreOptionsItem
					colorClass="transparent"
					text={`Save ${categoryName}`}
					icon={isSaved ? mdiBookmark : mdiBookmarkOutline}
					onClick={saveMutation}
				/>
			)}
			{openView && (
				<StyledDialogMoreOptionsItem
					colorClass="transparent"
					text={`View ${categoryName}`}
					icon={mdiEye}
					onClick={openView}
				/>
			)}
			{openForm && (
				<StyledDialogMoreOptionsItem
					colorClass="transparent"
					text={`Edit ${categoryName}`}
					icon={mdiPencilOutline}
					onClick={openForm}
				/>
			)}
			{openAudienceForm && (
				<StyledDialogMoreOptionsItem
					colorClass="transparent"
					text="Edit Audience"
					icon={mdiEarth}
					onClick={openAudienceForm}
				/>
			)}
			{deleteMutation && (
				<StyledDialogMoreOptionsItem
					colorClass="transparent"
					text={`Delete ${categoryName}`}
					icon={mdiTrashCanOutline}
					onClick={handleDelete}
				/>
			)}
		</StyledDialogMoreOptionsContent>
	);
};

export default MoreOptionsContent;
