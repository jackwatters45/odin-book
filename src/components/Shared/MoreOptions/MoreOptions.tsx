import { mdiDotsHorizontal, mdiPencilOutline } from "@mdi/js";
import { FC, HTMLAttributes } from "react";

import DialogTriangle from "./utils/DialogTriangle";
import useMoreOptions from "./useMoreOptions";
import {
	StyledDialogMoreOptions,
	StyledIcon,
	StyledUserAboutOverviewItemMoreButton,
} from "./MoreOptions.styles";
import { MoreOptionsOptions } from "./types/MoreOptionTypes";
import MoreOptionsContent from "./MoreOptionsContent/MoreOptionsContent";

interface MoreOptionsProps extends HTMLAttributes<HTMLDivElement> {
	categoryName: string;

	openForm?: () => void;
	openView?: () => void;
	openAudienceForm?: () => void;
	deleteMutation?: () => void;
	saveMutation?: () => void;

	isSaved?: boolean;
	isUsingDialog?: boolean;
	Button?: FC<{ onClick: (() => void) | undefined }>;
	options?: MoreOptionsOptions;
}

const MoreOptions = ({
	categoryName,
	openForm,
	openView,
	openAudienceForm,
	deleteMutation,
	saveMutation,
	isSaved = false,
	isUsingDialog = !!deleteMutation,
	Button,
	options,
	...props
}: MoreOptionsProps) => {
	const { ref, openDialog, handleDelete } = useMoreOptions({
		deleteMutation,
	});

	return (
		<div {...props}>
			{Button ? (
				<Button onClick={isUsingDialog ? openDialog : openForm} />
			) : (
				<StyledUserAboutOverviewItemMoreButton
					onClick={isUsingDialog ? openDialog : openForm}
				>
					<StyledIcon
						path={isUsingDialog ? mdiDotsHorizontal : mdiPencilOutline}
						size={1}
						$isUsingDialog={isUsingDialog}
					/>
				</StyledUserAboutOverviewItemMoreButton>
			)}
			{isUsingDialog && (
				<StyledDialogMoreOptions ref={ref}>
					<MoreOptionsContent
						categoryName={categoryName}
						isSaved={isSaved}
						options={options}
						openForm={openForm}
						openView={openView}
						openAudienceForm={openAudienceForm}
						deleteMutation={deleteMutation}
						handleDelete={handleDelete}
						saveMutation={saveMutation}
					/>
					<DialogTriangle />
				</StyledDialogMoreOptions>
			)}
		</div>
	);
};

export default MoreOptions;
