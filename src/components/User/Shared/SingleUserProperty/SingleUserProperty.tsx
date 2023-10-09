import { ReactNode } from "react";

import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import SingleUserPropertyExisting from "../UserPropertyDisplay";
import ITitleSegment from "../UserPropertyDisplay/types/ITitleSegment";
import { UserPropertyDisplayProps } from "../UserPropertyDisplay/UserPropertyDisplay";
import useProfileStatus from "@/hooks/useIsOwnProfile";

interface SingleUserPropertyProps extends UserPropertyDisplayProps {
	title: ITitleSegment[] | undefined | null;

	includeAddDetailLink?: boolean;
	addText?: string;
	handleOpenForm: () => void;
	hideIfRestricted?: boolean;

	isEditing: boolean;
	FormComponent: ReactNode | undefined;
	PlaceholderComponent: ReactNode;
}

const SingleUserProperty = ({
	title,
	isEditing,
	handleOpenForm,
	addText,
	hideIfRestricted = false,
	FormComponent,
	PlaceholderComponent,
	includeAddDetailLink = true,
	icon,
	audience,
	...props
}: SingleUserPropertyProps) => {
	const { isOwnProfile, isFriend } = useProfileStatus();

	if (isOwnProfile && isEditing) return FormComponent;

	const isAudienceRestricted =
		(!isOwnProfile && audience === "Only Me") || (audience === "Friends" && !isFriend);

	if (isAudienceRestricted) {
		return hideIfRestricted ? null : PlaceholderComponent;
	}

	const isContent = title && title.length;
	if (isContent) {
		return (
			<SingleUserPropertyExisting
				title={title}
				handleOpenForm={handleOpenForm}
				icon={icon}
				audience={audience}
				{...props}
			/>
		);
	}

	if (isOwnProfile && includeAddDetailLink) {
		return <AddDetailLink text={addText} onClick={handleOpenForm} />;
	}

	return PlaceholderComponent;
};

export default SingleUserProperty;
