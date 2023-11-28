import styled from "styled-components";

export const StyledMarkAllAsReadButton = styled.button`
	border-radius: 50%;
	padding: 0.375rem;
	display: flex;
	align-items: center;
	line-height: 0;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;
