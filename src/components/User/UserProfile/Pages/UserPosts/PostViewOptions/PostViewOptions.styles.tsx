import styled from "styled-components";

import UserProfileSection from "@/components/Shared/UserProfileSection";

export const StyledPostViewOptionsContainer = styled(UserProfileSection)`
	gap: 0;
	padding: 0.75rem 1rem 0rem;
`;

export const StyledViewContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	margin: 0 -1rem;
	padding: 0 1rem;
`;

export const StyledViewButton = styled.button`
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;
	padding: 0.5rem 0;
	font-size: 0.9rem;
	font-weight: 600;
	position: relative;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledSelectedViewButton = styled(StyledViewButton)`
    border-bottom: 3px solid ${({ theme }) => theme.colors.blueButton};
		margin-bottom: -3px;
		color: ${({ theme }) => theme.colors.blueText};
	}
`;

export const StyledUnselectedViewButton = styled(StyledViewButton)`
	::after {
		content: "";
		width: 100%;
		height: 85%;
		display: block;
		position: absolute;
		border-radius: 0.5rem;
		z-index: 1;
	}

	:hover::after {
		background: ${({ theme }) => theme.colors.hoverOverlay};
		border-radius: 0.25rem;
	}
`;
