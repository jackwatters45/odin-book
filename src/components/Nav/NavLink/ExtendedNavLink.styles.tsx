import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)<{ $isIcon: boolean }>`
	padding: 0;
	margin: 0;
	line-height: ${({ $isIcon }) => ($isIcon ? "0" : "normal")};
`;
