import { keyframes, styled } from "styled-components";

export const StyledDialog = styled.dialog`
	position: absolute;
	height: 100px;
	width: 300px;
	bottom: 1rem;
	left: calc(100% - 1rem - 300px);
	border: 1px solid white;

	background-color: white;
	border-radius: 0.25rem;
	z-index: 1100;
`;

export const StyledButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	width: fit-content;
`;

export const StyledErrorText = styled.p`
	padding: 0 1rem;
	margin-top: 2rem;
	text-align: center;
	color: black;
`;

const progressAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
	position: absolute;
	bottom: 0;
	height: 5px;
	width: 100%;
	border-radius: 0 0 0.25rem 0.25rem;
	overflow: hidden;

	div {
		height: 100%;
		width: 0;
		background-color: grey;
		animation: ${progressAnimation} 10s linear forwards;
	}
`;
