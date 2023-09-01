import styled from "styled-components";

import { StyledHobbiesContainerCss } from "@/styles/SharedStyles";

export const StyledRecommendedHobbiesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding-bottom: 4rem;
`;

export const StyledRecommendedText = styled.p`
	font-size: 0.8rem;
	font-weight: 700;
	margin-bottom: 1.25rem;
	color: #65676b;
`;

export const StyledDefaultHobbiesContainer = styled.div`
	${StyledHobbiesContainerCss}
	justify-content: center;
`;
