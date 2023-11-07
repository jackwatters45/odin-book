import Icon from "@mdi/react";
import styled from "styled-components";

import { StyledDialog } from "@/styles/SharedStyles";
import { DialogDirectionX } from "./types/MoreOptionTypes";

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

export const StyledDialogMoreOptions = styled(StyledDialog)<{
	$Direction: DialogDirectionX;
}>`
	width: 350px;
	position: absolute;
	margin-top: 1rem;
	top: unset;
	right: 2rem;
	left: unset;
	transform: unset;
	z-index: 1000;

	${({ $Direction }) =>
		$Direction === "left"
			? "border-radius: 0.5rem 0 0.5rem 0.5rem;"
			: "border-radius: 0 0.5rem 0.5rem 0.5rem;"}

	${({ $Direction }) => ($Direction === "left" ? "right: 50%;" : "left: 50%;")}
`;
