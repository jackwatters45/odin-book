import { mdiDotsHorizontal, mdiPencilOutline } from "@mdi/js";
import { FC, HTMLAttributes } from "react";

import DialogTriangle from "./utils/DialogTriangle";
import useMoreOptions from "./useMoreOptions";
import {
	StyledDialogMoreOptions,
	StyledIcon,
	StyledMoreOptionsContainer,
	StyledUserAboutOverviewItemMoreButton,
} from "./MoreOptions.styles";
import { MoreOptionsOptions } from "./types/MoreOptionsTypes";
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
	Button?: FC<{ onClick: (() => void) | undefined; showButton?: boolean }>;
	options?: MoreOptionsOptions;
	showButton?: boolean;
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
	showButton = true,
	...props
}: MoreOptionsProps) => {
	const { ref, openDialog, closeDialog, handleDelete, isPostFormOpen, isViewPostOpen } =
		useMoreOptions({
			deleteMutation,
		});

	return (
		<StyledMoreOptionsContainer {...props}>
			{Button ? (
				<Button onClick={isUsingDialog ? openDialog : openForm} />
			) : (
				<StyledUserAboutOverviewItemMoreButton
					onClick={isUsingDialog ? openDialog : openForm}
					style={{ visibility: showButton ? "visible" : "hidden" }}
				>
					<StyledIcon
						path={isUsingDialog ? mdiDotsHorizontal : mdiPencilOutline}
						size={1}
						$isUsingDialog={isUsingDialog}
						color={"#65676B"}
					/>
				</StyledUserAboutOverviewItemMoreButton>
			)}
			{isUsingDialog && (
				<StyledDialogMoreOptions ref={ref}>
					<MoreOptionsContent
						categoryName={categoryName}
						isSaved={isSaved}
						options={options}
						closeDialog={closeDialog}
						openForm={isPostFormOpen ? undefined : openForm}
						openView={isViewPostOpen ? undefined : openView}
						openAudienceForm={openAudienceForm}
						deleteMutation={deleteMutation}
						handleDelete={handleDelete}
						saveMutation={saveMutation}
					/>
					<DialogTriangle />
				</StyledDialogMoreOptions>
			)}
		</StyledMoreOptionsContainer>
	);
};

export default MoreOptions;
