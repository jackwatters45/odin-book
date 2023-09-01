import styled from "styled-components";

export const HeaderDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 4rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	position: relative;
	width: 100%;

	button {
		border-radius: 50%;
	}

	button:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`;

export const StyledModalCloseButton = styled.button`
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	display: flex;
	padding: 0.25rem;
`;
