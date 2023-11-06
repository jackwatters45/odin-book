import Icon from "@mdi/react";
import styled from "styled-components";

import { StyledTextInput } from "@/styles/SharedStyles";

export const StyledCommentContainer = styled.div<{ $nestedCount?: number }>`
	display: flex;
	gap: 0.5rem;
	align-items: center;

	* {
		margin-bottom: 0;
	}
`;

export const StyledSendIconButton = styled.button`
	height: 18px;

	& :disabled {
		cursor: "not-allowed";
	}
`;

export const StyledSendIcon = styled(Icon)`
	margin-right: 0.75rem;
	visibility: hidden;

	& .disabled {
		cursor: not-allowed;
	}
`;

export const StyledCommentInputLabel = styled(StyledTextInput)`
	height: 2.25rem;
	max-width: 100%;
`;
