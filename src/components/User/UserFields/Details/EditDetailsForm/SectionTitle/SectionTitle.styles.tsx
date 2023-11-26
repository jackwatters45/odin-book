import styled from "styled-components";

export const SectionTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
`;

export const StyledSectionTitle = styled.h3`
	font-size: 1.1rem;
	font-weight: 600;
`;

export const StyledSectionSubtitle = styled.span`
	font-size: 0.85rem;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
