import styled from "styled-components";

export const StyledRecoveryMethod = styled.label`
	display: flex;
	gap: 1rem;
	align-items: flex-start;
`;

export const StyledRecoveryMethodText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	> :nth-child(2) {
		font-weight: 500;
		font-size: 0.85rem;
	}
`;
