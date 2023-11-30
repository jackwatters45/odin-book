import styled from "styled-components";

export const StyledMarkAsReadDot = styled.button`
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.blueButton};

	position: absolute;
	right: 0.75rem;
	top: 2rem;
	transform: translateY(-50%);
`;
