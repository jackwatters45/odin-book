import { StyledHobbiesContainerCss } from "@/styles/SharedStyles";
import styled from "styled-components";

export const StyledSearchResultsHobbiesContainer = styled.div`
	${StyledHobbiesContainerCss}
`;

export const StyledNoResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const StyledNoResultsImg = styled.img`
	width: 200px;
	height: 200px;
`;

export const StyledNoResultsText = styled.p`
	font-size: 0.95rem;
	text-align: center;
	margin-top: 1rem;
	width: 300px;
	line-height: 1.5rem;
`;
