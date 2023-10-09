import StandardButton from "@/components/Shared/StandardButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledStandardButton = styled(StandardButton)`
	width: 100%;
`;

export const StyledRecoverCreateLinkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 2rem;
`;

export const StyledForgotLoginLink = styled(Link)`
	font-size: 0.7rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.blueButton};
	display: block;
	&:hover {
		text-decoration: underline;
	}
`;
