import styled from "styled-components";

export const StyledCloseButton = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${({ theme }) => theme.colors.border};
	top: 1rem;
	right: 1rem;
	padding: 0.25rem;
	border-radius: 50%;
	z-index: 1100;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
