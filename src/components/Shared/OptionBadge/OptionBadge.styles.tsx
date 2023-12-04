import styled from "styled-components";
import { StandardButtonStyles } from "@/styles/SharedStyles";

export const StyledBadgeContainer = styled.div`
	height: fit-content;

	> :hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	input:checked:not([disabled]) + label {
		color: #1877f2;
		background-color: #e7f3ff;
	}
`;

export const StyledBadge = styled.label<{ $showDelete: boolean }>`
	${StandardButtonStyles}

	font-size: 0.9rem;
	height: 38px;
	${({ theme }) => theme.greyBorder}
	border-radius: 2rem;
	padding-right: ${({ $showDelete }) => ($showDelete ? "0.25rem" : "1rem")};
	cursor: pointer;
	z-index: 99;

	.remove-badge {
		line-height: 0;
		margin-top: 2px;
		padding: 0.25rem;
		margin-right: 0.25rem;
		border-radius: 50%;
	}

	&:hover {
		.remove-badge {
			background-color: white;
		}
	}
`;
