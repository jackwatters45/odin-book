import styled from "styled-components";

import { StyledTextInput } from "@/styles/SharedStyles";

export const StyledCommentInputLabel = styled(StyledTextInput)`
	min-height: 48.5px;
	border-radius: 1rem;
	background: ${({ theme }) => theme.colors.primaryButton};
`;
