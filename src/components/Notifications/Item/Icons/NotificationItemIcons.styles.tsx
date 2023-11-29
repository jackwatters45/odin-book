import styled from "styled-components";

import { IconCircleBackground } from "@/components/Nav/Nav.styles";

export const StyledNotificationIconsContainer = styled.div`
	position: relative;
	padding-right: 0.25rem;
	padding-bottom: 0.25rem;
	align-self: flex-start;
`;

export const StyledNotificationTypeIcon = styled(IconCircleBackground)`
	position: absolute;
	right: 0;
	bottom: 0;
`;
