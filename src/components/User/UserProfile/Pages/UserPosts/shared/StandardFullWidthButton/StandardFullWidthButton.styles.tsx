import styled from "styled-components";
import { ButtonOverlay, StandardButtonStyles } from "@/styles/SharedStyles";

export const StyledFullWidthButton = styled.button`
	${StandardButtonStyles}
	${ButtonOverlay}

	height: 2.25rem;
	background-color: ${({ theme }) => theme.colors.primaryButton};
	position: relative;
`;
