import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleSegmentLink = styled(Link)`
	color: ${({ theme }) => theme.colors.textPrimary};

	&:hover {
		text-decoration: underline;
	}
`;
