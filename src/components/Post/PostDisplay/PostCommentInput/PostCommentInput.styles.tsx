import Icon from "@mdi/react";
import styled from "styled-components";

import { StyledTextInput } from "@/styles/SharedStyles";

export const StyledCommentContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-top: 0.5rem;
	align-items: center;
	margin-bottom: 0.5rem;

	* {
		margin-bottom: 0;
	}
`;

export const StyledSendIcon = styled(Icon)`
	margin-right: 0.75rem;

	display: none;
`;

export const StyledCommentInputLabel = styled(StyledTextInput)`
	height: 2.25rem;
	max-width: 100%;
`;
