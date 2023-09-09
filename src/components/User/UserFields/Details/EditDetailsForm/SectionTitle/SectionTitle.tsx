import { ReactNode } from "react";
import {
	StyledSectionSubtitle,
	StyledSectionTitle,
	SectionTitleContainer,
} from "./SectionTitle.styles";

interface SectionTitleProps {
	title: string;
	subtitle?: string | ReactNode[];
	rightColumn?: ReactNode;
	className?: string;
}

const SectionTitle = ({ title, subtitle, rightColumn, className }: SectionTitleProps) => {
	return (
		<SectionTitleContainer className={className}>
			<div>
				<StyledSectionTitle>{title}</StyledSectionTitle>
				{subtitle && <StyledSectionSubtitle>{subtitle}</StyledSectionSubtitle>}
			</div>
			{rightColumn && rightColumn}
		</SectionTitleContainer>
	);
};

export default SectionTitle;
