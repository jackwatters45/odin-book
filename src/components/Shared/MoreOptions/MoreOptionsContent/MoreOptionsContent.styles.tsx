import styled from "styled-components";
import StandardButton from "../../StandardButton";

export const StyledDialogMoreOptionsContent = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	height: 100%;
	width: 100%;
	border-radius: inherit;
	${({ theme }) => theme.cardShadow};
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
`;

export const StyledDialogMoreOptionsItem = styled(StandardButton)`
	font-size: 0.95rem;
	justify-content: flex-start;
	padding: 0.5rem;
`;
