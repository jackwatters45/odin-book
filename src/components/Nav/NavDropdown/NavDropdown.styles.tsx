import styled from "styled-components";

export const StyledNavDropdownDialog = styled.dialog`
	position: absolute;
	border: none;
	display: flex;
	flex-direction: column;
	z-index: 100;
	background-color: #f0f2f5;
	border-radius: 0.375rem;
	padding: 0.5rem 1rem;
	font-size: 0.9rem;
	margin-top: 4px;

	z-index: 1010;
	width: 360px;
	max-width: 100vw;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	${({ theme }) => theme.cardShadow};
`;
