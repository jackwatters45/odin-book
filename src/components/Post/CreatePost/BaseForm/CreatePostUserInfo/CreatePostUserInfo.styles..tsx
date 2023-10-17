import styled from "styled-components";

export const StyledUserInfo = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	padding-bottom: 0.5rem;

	> div {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}
`;

export const StyledFullName = styled.span`
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 1.2rem;
`;
