import styled from "styled-components";

export const StyledPostDateAudienceRow = styled.div`
	display: flex;
	align-items: center;

	padding-top: 0.125rem;
	gap: 0.25rem;

	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
