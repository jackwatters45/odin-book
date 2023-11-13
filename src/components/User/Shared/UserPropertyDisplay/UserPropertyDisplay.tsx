import Icon from "@mdi/react";
import { Fragment } from "react";

import {
	StyledUserPropertyDisplayItem,
	StyledUserPropertyDisplayItemSubtitle,
	StyledUserPropertyDisplayItemRightColumn,
	StyledUserPropertyDisplayItemTitle,
} from "./UserPropertyDisplay.styles";
import MoreOptions from "../../../Shared/MoreOptions";

import UserAboutAudience from "../UserPropertyAudience";
import { ImageCircle } from "@/components/Nav/Nav.styles";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import useProfileStatus from "@/hooks/useIsOwnProfile";
import renderTitleSegment, {
	ITitleSegment,
} from "@/utils/render/titleSegment/titleSegments";

export interface UserPropertyDisplayProps {
	icon: string;
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
	const { isOwnProfile } = useProfileStatus();

	return (
		<StyledUserPropertyDisplayItem>
			{!icon ? null : iconType === "icon" ? (
				<Icon
					path={icon}
					size={1.2}
					style={{
						minWidth: "1.8rem",
					}}
					color={"#65676B"}
				/>
			) : (
				<ImageCircle
					src={icon}
					alt="icon"
					style={{
						minWidth: "1.8rem",
					}}
				/>
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
			{isOwnProfile && (
				<StyledUserPropertyDisplayItemRightColumn>
					<UserAboutAudience audience={audience} category={category} itemId={itemId} />
					<MoreOptions
						categoryName={categoryDisplayName}
						openForm={handleOpenForm}
						deleteMutation={deleteMutation}
					/>
				</StyledUserPropertyDisplayItemRightColumn>
			)}
		</StyledUserPropertyDisplayItem>
	);
};

export default UserPropertyDisplay;
