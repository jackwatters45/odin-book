import styled from "styled-components";

export const IntroContainer = styled.div`
	width: 490px;
	background-color: #ffffff;
	border-radius: 0.25rem;
	${(props) => props.theme.sectionShadow}
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
`;
