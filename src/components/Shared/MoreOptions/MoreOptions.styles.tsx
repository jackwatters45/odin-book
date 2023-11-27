import Icon from "@mdi/react";
import styled from "styled-components";

import { StyledDialog } from "@/styles/SharedStyles";

export const StyledMoreOptionsContainer = styled.div`
	position: relative;
`;

export const StyledUserAboutOverviewItemMoreButton = styled.button`
	border-radius: 50%;
	padding: 0.375rem;
	display: flex;
	align-items: center;
	line-height: 0;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledIcon = styled(Icon)<{ $isUsingDialog: boolean }>`
	padding: ${({ $isUsingDialog }) => !$isUsingDialog && "1px"};
`;

export const StyledDialogMoreOptions = styled(StyledDialog)`
	width: 250px;
	position: absolute;
	margin-top: 1rem;
	top: unset;
	right: 2rem;
	left: unset;
	transform: unset;
	z-index: 1000;

	border-radius: 0.5rem 0 0.5rem 0.5rem;
	// border-radius: 0 0.5rem 0.5rem 0.5rem;
`;
