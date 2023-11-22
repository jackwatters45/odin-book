import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFriendCard = styled.div`
	border-radius: 0.375rem;
	background: ${({ theme }) => theme.colors.backgroundPrimary};
	${({ theme }) => theme.sectionShadow};

	min-width: 150px;
	max-width: 250px;

	display: flex;
	flex-direction: column;
`;

export const StyledFriendCardTextContent = styled.div`
	padding: 0.75rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
`;

export const StyledFriendCardUserName = styled(Link)`
	font-weight: 600;
	font-size: 1.05rem;
	display: block;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.textPrimary};

	&:hover {
		text-decoration: underline;
	}
`;
