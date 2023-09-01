import styled from "styled-components";

import { StandardButtonStyles } from "@/styles/SharedStyles";
import { ContentDiv } from "../../EditProfile.styles";

export const StyledDialogHobbies = styled.dialog`
	background: white;
	color: black;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
	border: none;
	z-index: 1002;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 548px;
	height: 628px;
	width: 80%;

	::backdrop {
		background: rgba(0, 0, 0, 0.8);
	}
`;

export const StyledHobbiesContainer = styled.div`
	justify-content: space-between;
	display: flex;
	flex-direction: column;
	min-height: 628px;
	width: 100%;
`;

export const StyledMoreOptionsButton = styled.button`
	${StandardButtonStyles}
	color: #1877f2;
	background-color: #e7f3ff;
	height: 38px;
	box-shadow: inset 0 0 0 0.25px grey;
	border-radius: 2rem;
	font-size: 0.95rem;
	margin-top: 0.5rem;
`;

export const StyledContentDiv = styled(ContentDiv)`
	padding: 0.5rem 0 0;
`;

export const StyledViewMoreContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledHobbiesSelectedAndResultsContainer = styled.div`
	padding: 0 1rem;
	width: 100%;

	overflow-y: auto;
	max-height: 412px;

	> div:first-child {
		margin-bottom: 0.25rem;
	}
`;
