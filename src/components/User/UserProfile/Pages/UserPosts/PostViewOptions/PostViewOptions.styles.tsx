import styled from "styled-components";

import UserProfileSection from "@/components/User/Shared/UserProfileSection";
import StandardButton from "@/components/Shared/StandardButton";

export const StyledPostViewOptionsContainer = styled(UserProfileSection)`
	gap: 0;
	padding: 0.5rem 1rem 0em;

	.header {
		padding-bottom: 0.5rem;
	}
`;

export const StyledViewContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	margin: 0 -1rem;
	padding: 0 1rem;
	height: 2.5rem;
`;

export const StyledViewButton = styled(StandardButton)`
	flex-grow: 1;
	border-radius: 0;
	gap: 0.25rem;
	padding: 0.5rem 0;
	font-size: 0.9rem;
	position: relative;
	color: ${({ theme }) => theme.colors.textSecondary};

	&:hover::before {
		background: transparent;
	}
`;

export const StyledSelectedViewButton = styled(StyledViewButton)`
	border-bottom: 3px solid ${({ theme }) => theme.colors.blueButton};
	margin-bottom: -3px;
	color: ${({ theme }) => theme.colors.blueText};
`;

export const StyledUnselectedViewButton = styled(StyledViewButton)`
	&::before {
		content: "";
		width: 100%;
		height: 85%;
		display: block;
		position: absolute;
		border-radius: 0.5rem;
		margin: auto 0;
		z-index: 1;
	}

	&:hover::before {
		background: ${({ theme }) => theme.colors.hoverOverlay};
		border-radius: 0.25rem;
	}
`;
