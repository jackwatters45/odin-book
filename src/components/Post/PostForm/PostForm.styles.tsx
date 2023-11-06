import styled, { css, keyframes } from "styled-components";

import { StyledDialog } from "@/styles/SharedStyles";

const slideInFromRight = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideInAnimation = css`
	animation: ${slideInFromRight} 200ms cubic-bezier(0.08, 0.52, 0.52, 1) forwards;
`;

export const StyledDialogPostForm = styled(StyledDialog)`
	width: 600px;
	z-index: 1005;
	min-height: 333px;
	overflow-x: hidden;
`;

export const StyledOtherFormContainer = styled.div`
	${slideInAnimation}
`;
