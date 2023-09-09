import { styled } from "styled-components";
import { StandardButtonStyles } from "@/styles/SharedStyles";

export const StyledContainer = styled.div`
	width: 100%;
	height: clamp(200px, 30vw, 450px);
	background-color: #dddfe2;
	position: relative;
	border-radius: 0 0 0.5rem 0.5rem;
`;

export const StyledCoverPhoto = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`;

export const StyledDiv = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 112px;
	border-radius: 0 0 0.5rem 0.5rem;
	background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
	display: flex;
	align-items: flex-end;
`;

export const StyledCoverError = styled.span`
	position: absolute;
	color: red;
	font-weight: 600;
	right: 1rem;
	top: 2rem;
`;

export const StyledEditCoverPhotoButton = styled.button`
	${StandardButtonStyles}
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.4);
	font-size: 0.9rem;
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	color: white;
`;
