import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleSegmentLink = styled(Link)`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: 600;

	&:hover {
		text-decoration: underline;
		text-decoration-thickness: 1px;
	}
`;

export const StyledIcon = styled(Icon)`
	margin-bottom: -0.25rem;
`;
