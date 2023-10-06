import StandardButton from "@/components/Shared/StandardButton";
import { StyledDialog } from "@/styles/SharedStyles";
import Icon from "@mdi/react";
import styled from "styled-components";

export const StyledUserAboutOverviewItemMoreButton = styled.button`
	border-radius: 50%;
	padding: 0.375rem;
	display: flex;
	align-items: center;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledIcon = styled(Icon)<{ $isUsingDialog: boolean }>`
	padding: ${({ $isUsingDialog }) => !$isUsingDialog && "1px"};
`;

export const StyledDialogMoreOptions = styled(StyledDialog)`
	width: 350px;
	position: absolute;
	margin-top: 1rem;
	top: unset;
	right: 2rem;
	left: unset;
	transform: unset;
	border-radius: 0.5rem 0 0.5rem 0.5rem;
	z-index: 1000;
`;

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
