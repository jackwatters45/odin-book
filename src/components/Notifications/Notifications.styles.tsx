import styled from "styled-components";

import UserProfileSection from "../User/Shared/UserProfileSection";

export const StyledNotificationsSection = styled(UserProfileSection)`
	gap: 0;
	padding: 1rem 0.5rem;

	> div:first-child {
		margin-left: 0.5rem;
	}
`;

export const StyledSectionTitle = styled.h3`
	font-size: 1rem;
	font-weight: 600;
	margin: 0.75rem 0.5rem 0.25rem;
`;
