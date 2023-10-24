import styled from "styled-components";

import { UserProfileSectionContainer } from "@/components/User/Shared/UserProfileSection/UserProfileSection.styles";
import { StyledTextInput } from "@/styles/SharedStyles";
import StandardButton from "@/components/Shared/StandardButton";

export const StyledCreatePostButton = styled(UserProfileSectionContainer)`
	gap: 0;
	padding: 0.75rem 1rem 0.5rem;
`;
export const StyledFirstRowCreatePost = styled.div`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	padding-bottom: 0.25rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding-bottom: 0.5rem;
`;

export const StyledSearchInputCreatePost = styled(StyledTextInput)`
	cursor: pointer;

	> span {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.textSecondary};
		padding-left: 1rem;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}

	&:hover::before {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledLastRowCreatePost = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
`;

export const StyledCreateTypeButton = styled(StandardButton)`
	flex-grow: 1;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	border-radius: 0.25rem;

	// &:hover {
	// 	background: ${({ theme }) => theme.colors.hoverOverlay};
	// 	border-radius: 0.25rem;
	// }

	span {
		font-size: 0.95rem;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
