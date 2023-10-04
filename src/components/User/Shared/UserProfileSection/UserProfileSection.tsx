import { HTMLAttributes, ReactNode } from "react";
import {
	StyledProfileSectionHeader,
	UserProfileSectionContainer,
} from "./UserProfileSection.styles";

export interface UserProfileSectionProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	subtitle?: string;
	children?: ReactNode;
	rightColumn?: ReactNode;
}

const UserProfileSection = ({
	title,
	subtitle,
	children,
	rightColumn,
	...props
}: UserProfileSectionProps) => {
	return (
		<UserProfileSectionContainer {...props}>
			<StyledProfileSectionHeader className="header">
				<h3>{title}</h3>
				{rightColumn && rightColumn}
			</StyledProfileSectionHeader>
			{subtitle && <p>{subtitle}</p>}
			{children}
		</UserProfileSectionContainer>
	);
};

export default UserProfileSection;
