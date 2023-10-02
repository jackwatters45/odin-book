import { ReactNode } from "react";
import {
	StyledProfileSectionHeader,
	UserProfileSectionContainer,
} from "./UserProfileSection.styles";

export interface UserProfileSectionProps {
	title: string;
	subtitle?: string;
	children?: ReactNode;
	rightColumn?: ReactNode;
	className?: string;
}

const UserProfileSection = ({
	title,
	subtitle,
	children,
	rightColumn,
	className,
}: UserProfileSectionProps) => {
	return (
		<UserProfileSectionContainer className={className}>
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
