import Icon from "@mdi/react";
import { Fragment } from "react";

import {
	StyledUserAboutOverviewItem,
	StyledUserAboutOverviewItemSubtitle,
	StyledUserAboutOverviewItemRightColumn,
	StyledUserAboutOverviewItemTitle,
} from "./UserAboutOverviewItemExisting.styles";
import MoreOptions from "../../../Shared/MoreOptions/MoreOptions";
import useUserAboutOverviewItemExisting from "./useUserAboutOverviewItemExisting";
import { TitleSegment } from "../UserAboutOverviewItem/UserAboutOverviewItem";
import Audience from "../UserAboutAudience";
import { ImageCircle } from "@/components/Nav/Nav.styles";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";

export interface ExistingOverviewItemProps {
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

interface ExtendedExistingOverviewItemProps extends ExistingOverviewItemProps {
	title: TitleSegment[];
}

const UserAboutOverviewItemExisting = ({
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
}: ExtendedExistingOverviewItemProps) => {
	const { renderTitleSegment } = useUserAboutOverviewItemExisting();

	return (
		<StyledUserAboutOverviewItem>
			{!icon ? null : iconType === "icon" ? (
				<Icon path={icon} size={1.2} color={"#65676B"} />
			) : (
				<ImageCircle src={icon} alt="icon" />
			)}
			<StyledUserAboutOverviewItemTitle>
				<span>
					{title.map((segment, index) => (
						<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
					))}
				</span>
				{subtitle && (
					<StyledUserAboutOverviewItemSubtitle>
						{subtitle}
					</StyledUserAboutOverviewItemSubtitle>
				)}
			</StyledUserAboutOverviewItemTitle>
			<StyledUserAboutOverviewItemRightColumn>
				<Audience audience={audience} category={category} itemId={itemId} />
				<MoreOptions
					categoryName={categoryDisplayName}
					openForm={handleOpenForm}
					deleteMutation={deleteMutation}
				/>
			</StyledUserAboutOverviewItemRightColumn>
		</StyledUserAboutOverviewItem>
	);
};

export default UserAboutOverviewItemExisting;
