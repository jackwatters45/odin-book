import { styled } from "styled-components";

export const StyledAvatarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledAvatarImageBackground = styled.div`
	background-color: white;
	border-radius: 50%;
	width: 176px;
	height: 176px;
	padding: 4px;
	position: relative;
`;

export const StyledHoverableDiv = styled.div`
	border-radius: 50%;
	overflow: hidden;

	:hover {
		opacity: 0.8;
	}
`;

export const StyledAvatarImage = styled.img`
	border-radius: 50%;
	width: 168px;
	height: 168px;
`;

export const StyledAvatarEditButton = styled.button`
	position: absolute;
	bottom: 27px;
	right: 27px;
	transform: translate(50%, 50%);
`;
