import { IconCircleBackground } from "@/components/Nav/Nav.styles";
import styled from "styled-components";

export const StyledRadioFormDialogContentContainer = styled.div`
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	max-height: 612px;
`;

export const StyledRadioFormLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	padding: 0.5rem 0.75rem;
	border-radius: 0.25rem;
	position: relative;

	&::after {
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		margin-left: -0.5rem;
		border-radius: 0.25rem;
	}

	&:hover::after {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledIconCircleBackground = styled(IconCircleBackground)`
	padding: 1rem;
`;

export const StyledTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.25rem;
	flex-grow: 1;

	h4 {
		font-size: 1.1rem;
		font-weight: 600;
	}

	span {
		font-size: 0.9rem;
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
