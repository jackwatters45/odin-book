import { Link } from "react-router-dom";

import styled from "styled-components";

export const StyledRecoverUserPreviewContainer = styled.div`
	align-self: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	font-size: 0.9rem;

	padding-right: 1rem;

	text-align: center;
`;

export const StyledUserNameText = styled.p`
	font-size: 0.95rem;
	font-weight: 500;
	white-space: nowrap;
`;

export const StyledLink = styled(Link)`
	font-size: 0.8rem;

	&:hover {
		text-decoration: underline;
	}
`;
