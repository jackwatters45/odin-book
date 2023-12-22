import styled, { css, keyframes } from "styled-components";

const slideInFromLeft = keyframes`
	0% {
		transform: translateX(-50%);
	}
	100% {
		transform: translateX(0);
	}
`;

export const StyledMainFormContainer = styled.div<{ $isPreviousDefault: boolean }>`
	animation: ${slideInFromLeft} 200ms cubic-bezier(0.08, 0.52, 0.52, 1) forwards;

	${({ $isPreviousDefault }) =>
		$isPreviousDefault &&
		css`
			animation: none;
		`}
`;

export const StyledBasePostForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
`;

export const StyledBaseFormScrollContainer = styled.div`
	// max-height: 70vh;
	// overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
