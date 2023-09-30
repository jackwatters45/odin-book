import { ReactNode } from "react";

import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import UserAboutOverviewItemExisting from "./UserAboutOverviewItemExisting";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { UserAboutAudienceFormFields } from "@/types/IUser";

export type TitleSegment =
	| { type: "text"; content: string }
	| { type: "bold"; content: string }
	| { type: "link"; content: string; linkTo: string };

interface UserAboutOverviewItemProps {
	title: TitleSegment[] | undefined | null;
	icon: string;
	audience: AudienceStatusOptions;
	itemId?: string;
	category: UserAboutAudienceFormFields;
	categoryDisplayName: string;
	FormComponent: ReactNode;

	deleteMutation: (() => void) | undefined;
	subtitle?: string | undefined | null;
	addText?: string;

	isEditing: boolean;
	handleOpenForm: () => void;

	includeAddDetailLink?: boolean;
}

const UserAboutOverviewItem = ({
	title,
	icon,
	audience,
	itemId,
	category,
	categoryDisplayName,
	FormComponent,
	deleteMutation,
	subtitle,
	isEditing,
	handleOpenForm,
	addText,
	includeAddDetailLink = true,
}: UserAboutOverviewItemProps) => {
	if (isEditing) {
		return FormComponent;
	} else if (title && title.length) {
		return (
			<UserAboutOverviewItemExisting
				title={title}
				icon={icon}
				audience={audience}
				subtitle={subtitle}
				itemId={itemId}
				category={category}
				categoryDisplayName={categoryDisplayName}
				handleOpenForm={handleOpenForm}
				deleteMutation={deleteMutation}
			/>
		);
	} else if (includeAddDetailLink) {
		return <AddDetailLink text={addText} onClick={handleOpenForm} />;
	} else {
		return null;
	}
};

export default UserAboutOverviewItem;
