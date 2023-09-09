import styled from "styled-components";

export const StyledRadioContainer = styled.div`
	position: relative;
	padding-left: 25px;
	cursor: pointer;
	margin-bottom: 18px;

	input:checked ~ span {
		border: 2px solid ${({ theme }) => theme.colors.blueButton};
	}

	input:checked ~ span:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.blueButton};
	}
`;

export const StyledRadioInput = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

export const StyledRadioSpan = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.textSecondary};
`;
