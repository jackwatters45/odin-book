import { mdiDotsHorizontal, mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";

import DialogTriangle from "./utils/DialogTriangle";
import useMoreOptions from "./useMoreOptions";
import {
	StyledDialogMoreOptions,
	StyledDialogMoreOptionsContent,
	StyledDialogMoreOptionsItem,
	StyledIcon,
	StyledUserAboutOverviewItemMoreButton,
} from "./MoreOptions.styles";
import { FC } from "react";

export interface MoreOptionsOption {
	text: string;
	icon: string | undefined;
	onClick: () => void;
}
interface MoreOptionsProps {
	categoryName: string;
	openForm: (() => void) | undefined;
	deleteMutation: (() => void) | undefined;
	isUsingDialog?: boolean;
	Button?: FC<{ onClick: (() => void) | undefined }>;

	options?: MoreOptionsOption[];
	className?: string;
}

const MoreOptions = ({
	categoryName,
	openForm,
	deleteMutation,
	isUsingDialog = !!deleteMutation,
	Button,
	options,
	className,
}: MoreOptionsProps) => {
	const { ref, openDialog, handleDelete } = useMoreOptions({
		deleteMutation,
	});

	return (
		<div className={className}>
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
					<StyledDialogMoreOptionsContent>
						{options ? (
							options.map((option) => (
								<StyledDialogMoreOptionsItem
									key={option.text}
									colorClass="transparent"
									text={option.text}
									icon={option.icon}
									onClick={option.onClick}
								/>
							))
						) : (
							<>
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
							</>
						)}
					</StyledDialogMoreOptionsContent>
					<DialogTriangle />
				</StyledDialogMoreOptions>
			)}
		</div>
	);
};

export default MoreOptions;
