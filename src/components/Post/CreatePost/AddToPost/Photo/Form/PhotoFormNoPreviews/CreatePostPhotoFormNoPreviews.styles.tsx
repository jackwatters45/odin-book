import styled from "styled-components";

export const StyledAddPhotoLabel = styled.label`
	width: 100%;
	height: 220px;
	border-radius: 0.375rem;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	cursor: pointer;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledAddPhotoText = styled.p`
	padding-top: 0.375rem;
	font-size: 1.125rem;
	font-weight: 600;
`;

export const StyledAddPhotoSubtext = styled.p`
	font-size: 0.7rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
