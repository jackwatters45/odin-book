import { StyledTextInput } from "@/styles/SharedStyles";
import styled from "styled-components";

export const StyledHobbiesSearchContainer = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	border-bottom: 1px solid #dddfe2;
	padding: 0 1rem 0.5rem;
`;

export const StyledHobbiesSearchLabel = styled(StyledTextInput)`
	> input {
		font-size: 0.95rem;
		padding: 0 1rem 0 2.25rem;
	}

	span {
		position: absolute;
		left: 0.5rem;
		line-height: 0;
	}
`;
