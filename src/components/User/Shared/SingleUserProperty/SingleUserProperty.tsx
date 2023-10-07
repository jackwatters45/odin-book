import { ReactNode } from "react";

import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import SingleUserPropertyExisting from "../UserPropertyDisplay";
import ITitleSegment from "../UserPropertyDisplay/types/ITitleSegment";
import { UserPropertyDisplayProps } from "../UserPropertyDisplay/UserPropertyDisplay";
import useIsOwnProfile from "@/hooks/useIsOwnProfile";

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
	...props
}: SingleUserPropertyProps) => {
	const isOwnProfile = useIsOwnProfile();

	if (isEditing && isOwnProfile) {
		return FormComponent;
	} else if (title && title.length) {
		return (
			<SingleUserPropertyExisting
				title={title}
				handleOpenForm={handleOpenForm}
				icon={icon}
				{...props}
			/>
		);
	} else if (includeAddDetailLink && isOwnProfile) {
		return <AddDetailLink text={addText} onClick={handleOpenForm} />;
	} else {
		return PlaceholderComponent;
	}
};

export default SingleUserProperty;
