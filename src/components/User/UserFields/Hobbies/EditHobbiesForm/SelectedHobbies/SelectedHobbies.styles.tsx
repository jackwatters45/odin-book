import styled from "styled-components";
import { StyledHobbiesContainerCss } from "@/styles/SharedStyles";

export const StyledSelectedHobbiesContainer = styled.div`
	${StyledHobbiesContainerCss}

	min-height: 120px;
	margin: 0.375rem 0.625px 1rem 0;
	padding: 0.625rem 0.5rem;
	${({ theme }) => theme.greyBorder}
	border-radius: 0.5rem;
`;
