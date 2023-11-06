import { mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

import { SortCommentsFormFields } from "../types/PostCommentTypes";
import DialogTriangle from "@/components/Shared/MoreOptions/utils/DialogTriangle";
import {
	StyledDialogMoreOptionsContent,
	StyledDialogMoreOptionsItem,
} from "@/components/Shared/MoreOptions/MoreOptionsContent/MoreOptionsContent.styles";
import {
	StyledCommentSortAnchor,
	StyledCommentSortButton,
	StyledCommentSortContainer,
	StyledCommentSortDialogMoreOptions,
} from "./CommentSort.styles";
import useMoreOptions from "@/components/Shared/MoreOptions/useMoreOptions";

interface CommentSortProps {
	control: Control<SortCommentsFormFields>;
	setValue: UseFormSetValue<SortCommentsFormFields>;
}

const CommentSort = ({ control, setValue }: CommentSortProps) => {
	const { ref, openDialog, closeDialog, dialogDirection } = useMoreOptions({
		deleteMutation: undefined,
	});

	return (
		<StyledCommentSortContainer>
			<StyledCommentSortAnchor>
				<Controller
					name={"sort"}
					control={control}
					render={({ field }) => {
						return (
							<StyledCommentSortButton onClick={openDialog}>
								<span>{field.value}</span>
								<Icon path={mdiMenuDown} size={0.8} />
							</StyledCommentSortButton>
						);
					}}
				/>
				<StyledCommentSortDialogMoreOptions ref={ref} $Direction={dialogDirection}>
					<StyledDialogMoreOptionsContent>
						<StyledDialogMoreOptionsItem
							colorClass="transparent"
							text={"Most relevant"}
							onClick={() => {
								setValue("sort", "Most relevant");
								closeDialog();
							}}
						/>
						<StyledDialogMoreOptionsItem
							colorClass="transparent"
							text={"Newest"}
							onClick={() => {
								setValue("sort", "Newest");
								closeDialog();
							}}
						/>
					</StyledDialogMoreOptionsContent>
					<DialogTriangle Direction={dialogDirection} />
				</StyledCommentSortDialogMoreOptions>
			</StyledCommentSortAnchor>
		</StyledCommentSortContainer>
	);
};

export default CommentSort;
