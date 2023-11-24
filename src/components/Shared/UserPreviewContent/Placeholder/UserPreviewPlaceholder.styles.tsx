import styled from "styled-components";

export const StyledPlaceholderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: 1rem;
	padding: 1rem;
	text-align: center;
`;

export const StyledPlaceholderImage = styled.img`
	width: 112px;
	height: 112px;
`;

export const StyledPlaceholderText = styled.h3`
	color: ${({ theme }) => theme.colors.textSecondary};
`;
