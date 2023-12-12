import styled from "styled-components";

export const StyledNotificationsCount = styled.span`
	position: absolute;
	bottom: 0.5rem;

	height: 1.25rem;
	min-width: 1.25rem;
	width: fit-content;
	padding: 0 0.5rem;
	text-align: center;
	line-height: 1.25rem;

	font-size: 0.75rem;
	font-weight: 600;
	color: #fff;
	background-color: #ef4444;
	border-radius: 50%;

	@media (max-width: 500px) {
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
