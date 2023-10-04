import { ReactNode } from "react";

import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import SingleUserPropertyExisting from "../UserPropertyDisplay";
import ITitleSegment from "../UserPropertyDisplay/types/ITitleSegment";
import { UserPropertyDisplayProps } from "../UserPropertyDisplay/UserPropertyDisplay";

interface SingleUserPropertyProps extends UserPropertyDisplayProps {
	title: ITitleSegment[] | undefined | null;

	includeAddDetailLink?: boolean;
	addText?: string;
	handleOpenForm: () => void;

	isEditing: boolean;
	FormComponent: ReactNode;
}

const SingleUserProperty = ({
	title,
	isEditing,
	handleOpenForm,
	addText,
	FormComponent,
	includeAddDetailLink = true,
	...props
}: SingleUserPropertyProps) => {
	if (isEditing) {
		return FormComponent;
	} else if (title && title.length) {
		return (
			<SingleUserPropertyExisting
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

export default SingleUserProperty;
