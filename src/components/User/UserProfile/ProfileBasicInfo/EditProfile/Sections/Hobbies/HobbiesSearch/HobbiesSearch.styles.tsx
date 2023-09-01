import styled from "styled-components";

export const StyledHobbiesSearchContainer = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	border-bottom: 1px solid #dddfe2;
	padding: 0 1rem;
`;

export const StyledHobbiesSearchLabel = styled.label`
	width: 100%;
	height: 42px;
	border-radius: 1.5rem;
	background-color: #f0f2f5;
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	position: relative;

	> input {
		font-size: 0.95rem;
		height: 100%;
		width: 100%;
		padding: 0 1rem 0 2.25rem;
		color: #65676b;
		outline: none;
		border-radius: 1.5rem;
		cursor: auto;
	}

	span {
		position: absolute;
		left: 0.5rem;
		line-height: 0;
	}
`;
