import { Link } from "react-router-dom";

import styled from "styled-components";

export const StyledAddDetailLink = styled(Link)`
	display: flex;
	align-items: center;
	background: transparent;
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.colors.blueText};
	font-size: 0.95rem;
	gap: 0.75rem;
	width: fit-content;
`;
