import { ReactNode } from "react";
import {
	StyledButton,
	StyledProfileSectionHeader,
	UserProfileSectionContainer,
} from "./UserProfileSection.styles";
import { Link } from "react-router-dom";

type seeAllLink = {
	to: string;
	text: string;
};

interface UserProfileSectionProps {
	title: string;
	subtitle?: string;
	children: ReactNode;
	seeAllLink?: seeAllLink;
	className?: string;
}

const UserProfileSection = ({
	title,
	subtitle,
	children,
	seeAllLink,
	className,
}: UserProfileSectionProps) => {
	return (
		<UserProfileSectionContainer className={className}>
			<StyledProfileSectionHeader>
				<h3>{title}</h3>
				{seeAllLink && (
					<StyledButton>
						<Link to={seeAllLink.to}>{seeAllLink.text}</Link>
					</StyledButton>
				)}
			</StyledProfileSectionHeader>
			{subtitle && <p>{subtitle}</p>}
			{children}
		</UserProfileSectionContainer>
	);
};

export default UserProfileSection;
