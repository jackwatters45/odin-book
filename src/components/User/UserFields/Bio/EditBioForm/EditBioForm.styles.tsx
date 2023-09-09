import { styled } from "styled-components";

export const StyledTextAreaContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledTextArea = styled.textarea`
	width: 225px;
	height: 75px;
	border-radius: 0.5rem;
	background-color: #f0f2f5;
	padding: 0 0.5rem;
	color: #050505;
	font-family: inherit;
	font-size: 0.95rem;
	resize: none;
	border-width: 0.5px;
	text-align: center;
	padding-top: 0.5rem;
	border: none;
	box-shadow: inset 0 0 0 0.5px grey;
`;

export const StyledCharCount = styled.p`
	color: #65676b;
	font-size: 0.8rem;
	margin: 0.25rem 0;
	text-align: right;
`;

export const StyledBottomRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.25rem;
`;

export const StyledButton = styled.button`
	color: black;
	background-color: #e4e6eb;
`;
