import styled from "styled-components";

import { StyledDialog } from "@/styles/SharedStyles";

export const StyledDialogFamilyMembers = styled(StyledDialog)`
	position: absolute;
	top: unset;
	transform: unset;
	left: unset;
	margin-top: -0.5rem;
	right: 1rem;
	z-index: 1000;

	max-width: unset;
	width: calc(100% - 2rem);
	min-height: 40px;

	border-radius: 0.375rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	${({ theme }) => theme.cardShadow};

	> * {
		font-size: 0.95rem;
		font-weight: 600;
		display: block;
	}

	> span {
		padding: 0.75rem 0.5rem;
	}
`;

export const StyledSearchResult = styled.div`
	display: flex;
	align-items: center;
	padding: 0 0.5rem;
	gap: 0.5rem;
	height: 56px;
	border-radius: 0.375rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;