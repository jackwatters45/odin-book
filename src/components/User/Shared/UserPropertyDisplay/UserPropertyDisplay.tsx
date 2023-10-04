import Icon from "@mdi/react";
import { Fragment } from "react";

import {
	StyledUserPropertyDisplayItem,
	StyledUserPropertyDisplayItemSubtitle,
	StyledUserPropertyDisplayItemRightColumn,
	StyledUserPropertyDisplayItemTitle,
} from "./UserPropertyDisplay.styles";
import MoreOptions from "../../../Shared/MoreOptions/MoreOptions";

import UserAboutAudience from "../UserPropertyAudience";
import { ImageCircle } from "@/components/Nav/Nav.styles";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import ITitleSegment from "./types/ITitleSegment";
import renderTitleSegment from "./utils/renderTitleSegment";

export interface UserPropertyDisplayProps {
	icon: string | undefined;
	iconType?: "icon" | "image";
	audience: AudienceStatusOptions;
	itemId?: string;
	category: AudienceFormFields;
	categoryDisplayName: string;
	handleOpenForm: () => void;
	deleteMutation: (() => void) | undefined;
	subtitle?: string | undefined | null;
}

interface ExtendedUserPropertyDisplayProps extends UserPropertyDisplayProps {
	title: ITitleSegment[];
}

const UserPropertyDisplay = ({
	title,
	icon,
	iconType = "icon",
	audience,
	itemId,
	category,
	categoryDisplayName,
	handleOpenForm,
	deleteMutation,
	subtitle,
}: ExtendedUserPropertyDisplayProps) => {
	return (
		<StyledUserPropertyDisplayItem>
			{!icon ? null : iconType === "icon" ? (
				<Icon path={icon} size={1.2} color={"#65676B"} />
			) : (
				<ImageCircle src={icon} alt="icon" />
			)}
			<StyledUserPropertyDisplayItemTitle>
				<span>
					{title.map((segment, index) => (
						<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
					))}
				</span>
				{subtitle && (
					<StyledUserPropertyDisplayItemSubtitle>
						{subtitle}
					</StyledUserPropertyDisplayItemSubtitle>
				)}
			</StyledUserPropertyDisplayItemTitle>
			<StyledUserPropertyDisplayItemRightColumn>
				<UserAboutAudience audience={audience} category={category} itemId={itemId} />
				<MoreOptions
					categoryName={categoryDisplayName}
					openForm={handleOpenForm}
					deleteMutation={deleteMutation}
				/>
			</StyledUserPropertyDisplayItemRightColumn>
		</StyledUserPropertyDisplayItem>
	);
};

export default UserPropertyDisplay;