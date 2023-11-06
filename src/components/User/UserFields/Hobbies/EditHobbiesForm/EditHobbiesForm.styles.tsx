import styled from "styled-components";

import { StandardButtonStyles, StyledDialog } from "@/styles/SharedStyles";
import { ContentDiv } from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfile.styles";

export const StyledDialogHobbies = styled(StyledDialog)`
	z-index: 1002;

	width: 548px;
	height: 628px;
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
