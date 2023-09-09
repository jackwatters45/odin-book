import styled from "styled-components";

export const SwitchInput = styled.input`
	height: 0;
	width: 0;
	visibility: hidden;
`;

export const SwitchLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 50px;
	height: 25px;
	background: grey;
	border-radius: 100px;
	position: relative;
	transition: background-color 0.2s;

	&::after {
		content: "";
		position: absolute;
		top: 2px;
		left: 2px;
		width: 21px;
		height: 21px;
		border-radius: 45px;
		transition: 0.2s;
		background: white;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
	}
`;

export const SwitchWrapper = styled.div`
	${SwitchInput}:checked + ${SwitchLabel} {
		background: ${({ theme }) => theme.colors.blueText};
		&::after {
			content: "";
			position: absolute;
			left: calc(100% - 2px);
			transform: translateX(-100%);
		}
	}
`;
