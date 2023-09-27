import styled from "styled-components";

import { UserProfileSectionContainer } from "@/components/Shared/UserProfileSection/UserProfileSection.styles";
import { StyledTextInput } from "@/styles/SharedStyles";
import StandardButton from "@/components/Shared/StandardButton";

export const StyledCreatePostButton = styled(UserProfileSectionContainer)`
	gap: 0;
	padding: 0.75rem 1rem 0.5rem;
`;
export const StyledFirstRowCreatePost = styled.div`
	display: flex;
	gap: 0.25rem;
	padding-bottom: 0.25rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledSearchInputCreatePost = styled(StyledTextInput)`
	> input {
		font-size: 1.05rem;
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
