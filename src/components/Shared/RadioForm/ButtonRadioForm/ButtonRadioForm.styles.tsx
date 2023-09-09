import { StandardButtonStyles } from "@/styles/SharedStyles";
import styled from "styled-components";

export const StyledRadioFormButton = styled.button`
	${StandardButtonStyles}
	gap: 0.25rem;
	background-color: ${({ theme }) => theme.colors.primaryButton};
	padding: 0.5rem 0.75rem;
	color: ${({ theme }) => theme.colors.textSecondary};
	transition: all 0.2s ease-in-out;

	span {
		font-weight: 600;
		font-size: 0.9rem;
	}
`;
