import { styled } from "styled-components";
import { StandardButtonStyles } from "@/styles/SharedStyles";

export const StyledEditProfileButton = styled.button`
	${StandardButtonStyles}
	background-color: grey;
	font-size: 0.95rem;

	@media (min-width: 900px) {
		margin-bottom: 1rem;
	}
`;

export const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.25rem 1rem 0;
	flex-grow: 1;
	overflow: hidden;

	> div {
		align-items: center;
		margin-bottom: 1rem;
	}

	> div:last-child {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const BottomDiv = styled.div<{ $border?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 1rem;
	border-top: ${({ $border }) => ($border ? "1px solid #dddfe2" : "none")};
`;

export const StyledButton = styled.button`
	height: 2.5rem;
	border-radius: 0.25rem;
	width: 100%;
	color: #1877f2;
	font-size: 1rem;
	font-weight: 700;
	background: #e7f3ff;
	margin: 0.25rem;

	&:hover {
		background: #d9eaf9;
	}
`;
