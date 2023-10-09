import styled from "styled-components";

import { FullWidthStandardSelect } from "@/styles/SharedStyles";

export const StyledFullWidthStandardSelect = styled(FullWidthStandardSelect)`
	font-size: 0.95rem;
	margin-bottom: 0.375rem;
	background-color: transparent;
	border: solid 1px ${({ theme }) => theme.colors.border};
`;

export const StyledGenderVisibleText = styled.p`
	font-size: 0.8rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.textSecondary};
	margin-bottom: 0.75rem;
`;
