import { ReactNode } from "react";

import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import SingleUserPropertyExisting from "../UserPropertyDisplay";
import { UserPropertyDisplayProps } from "../UserPropertyDisplay/UserPropertyDisplay";
import useProfileStatus from "@/hooks/useIsOwnProfile";
import { ITitleSegment } from "@/utils/render/titleSegment/titleSegments";

interface SingleUserPropertyProps extends UserPropertyDisplayProps {
	title: ITitleSegment[] | undefined | null;

	includeAddDetailLink?: boolean;
	addText?: string;
	handleOpenForm: () => void;

	isEditing: boolean;
	FormComponent: ReactNode | undefined;
	PlaceholderComponent: ReactNode;
}

const SingleUserProperty = ({
	title,
	isEditing,
	handleOpenForm,
	addText,
	FormComponent,
	PlaceholderComponent,
	includeAddDetailLink = true,
	icon,
	audience,
	...props
}: SingleUserPropertyProps) => {
	const { isOwnProfile } = useProfileStatus();

	const isContent = title && title.length;

	if (isOwnProfile && isEditing) return FormComponent;

	if (isOwnProfile && !isContent && includeAddDetailLink) {
		return <AddDetailLink text={addText} onClick={handleOpenForm} />;
	}

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

	return PlaceholderComponent;
};

export default SingleUserProperty;
