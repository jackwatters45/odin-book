import { ReactNode } from "react";

import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import UserAboutOverviewItemExisting from "../UserAboutOverviewItemExisting";
import { ExistingOverviewItemProps } from "../UserAboutOverviewItemExisting/UserAboutOverviewItemExisting";

export type TitleSegment =
	| { type: "text"; content: string }
	| { type: "bold"; content: string }
	| { type: "link"; content: string; linkTo: string };

interface UserAboutOverviewItemProps extends ExistingOverviewItemProps {
	title: TitleSegment[] | undefined | null;

	includeAddDetailLink?: boolean;
	addText?: string;
	handleOpenForm: () => void;

	isEditing: boolean;
	FormComponent: ReactNode;
}

const UserAboutOverviewItem = ({
	title,
	isEditing,
	handleOpenForm,
	addText,
	FormComponent,
	includeAddDetailLink = true,
	...props
}: UserAboutOverviewItemProps) => {
	if (isEditing) {
		return FormComponent;
	} else if (title && title.length) {
		return (
			<UserAboutOverviewItemExisting
				title={title}
				handleOpenForm={handleOpenForm}
				{...props}
			/>
		);
	} else if (includeAddDetailLink) {
		return <AddDetailLink text={addText} onClick={handleOpenForm} />;
	} else {
		return null;
	}
};

export default UserAboutOverviewItem;
