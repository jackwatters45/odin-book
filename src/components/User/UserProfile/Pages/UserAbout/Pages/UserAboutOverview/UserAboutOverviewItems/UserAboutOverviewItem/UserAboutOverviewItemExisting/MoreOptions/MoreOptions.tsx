import { mdiDotsHorizontal, mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";

import DialogTriangle from "./DialogTriangle";
import useMoreOptions from "./useMoreOptions";
import {
	StyledDialogMoreOptions,
	StyledDialogMoreOptionsContent,
	StyledDialogMoreOptionsItem,
	StyledIcon,
	StyledUserAboutOverviewItemMoreButton,
} from "./MoreOptions.styles";

interface MoreOptionsProps {
	categoryName: string;
	openForm: () => void;
	deleteMutation: (() => void) | undefined;
}

const MoreOptions = ({ categoryName, openForm, deleteMutation }: MoreOptionsProps) => {
	const { ref, openDialog, isUsingDialog, handleDelete } = useMoreOptions({
		deleteMutation,
	});

	return (
		<div>
			<StyledUserAboutOverviewItemMoreButton
				onClick={isUsingDialog ? openDialog : openForm}
			>
				<StyledIcon
					path={isUsingDialog ? mdiDotsHorizontal : mdiPencilOutline}
					size={1}
					isUsingDialog={isUsingDialog}
				/>
			</StyledUserAboutOverviewItemMoreButton>
			{isUsingDialog && (
				<StyledDialogMoreOptions ref={ref}>
					<StyledDialogMoreOptionsContent>
						<StyledDialogMoreOptionsItem
							colorClass="transparent"
							text={`Edit ${categoryName}`}
							icon={mdiPencilOutline}
							onClick={openForm}
						/>
						<StyledDialogMoreOptionsItem
							colorClass="transparent"
							text={`Delete ${categoryName}`}
							icon={mdiTrashCanOutline}
							onClick={handleDelete}
						/>
					</StyledDialogMoreOptionsContent>
					<DialogTriangle />
				</StyledDialogMoreOptions>
			)}
		</div>
	);
};

export default MoreOptions;
