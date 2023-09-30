import styled from "styled-components";

import DialogActions from "@/components/Shared/Dialog/DialogActions";

export const StyledAboutOverviewInputDiv = styled.div`
	border: 1px solid #dddfe2;
	border-radius: 0.375rem;
	margin-bottom: 0.75rem;
	position: relative;

	&:hover {
		border-color: ${({ theme }) => theme.colors.textSecondary};
	}

	input:focus + label,
	input.content + label,
	textarea:focus + label,
	textarea.content + label {
		font-size: 0.75rem;
		top: 0.75rem;
	}
`;

export const StyledAboutOverviewInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 1.625rem 1rem 0.625rem;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.05rem;
`;

export const StyledAboutOverviewTextarea = styled.textarea`
	width: 100%;
	height: 100%;
	padding: 1.7rem 1rem 0.7rem;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.05rem;
	resize: none;
`;

export const StyledAboutOverviewInputLabel = styled.label`
	position: absolute;
	left: 1rem;
	top: 1.25rem;
	pointer-events: none;
	font-size: 1.05rem;
	transition: all 0.2s ease-in-out;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledAboutOverviewDialogActions = styled(DialogActions)`
	padding: 0.75rem 0;
`;
