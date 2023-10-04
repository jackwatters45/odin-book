import styled from "styled-components";

export const StyledRadioInputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.25rem 0 0.5rem;
`;

export const StyledRadioFormLabel = styled.label<{ size: number }>`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	cursor: pointer;
	padding: 0.375rem 0;
	border-radius: 0.25rem;
	position: relative;

	&:hover > div > span:before {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledLabelText = styled.span`
	font-weight: 500;
	font-size: 0.95rem;
`;
