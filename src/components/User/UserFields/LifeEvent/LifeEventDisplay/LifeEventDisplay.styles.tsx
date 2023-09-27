import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLifeEventDisplay = styled.div`
	display: flex;
	gap: 0.25rem;
	justify-content: space-evenly;
	height: 460px;

	& > a:first-child {
		border-radius: 0.5rem 0 0 0.5rem;
		width: 50%;
	}

	& > a:last-child {
		border-radius: 0 0.5rem 0.5rem 0;
		width: 50%;
	}

	& > a:only-child {
		width: 100%;
	}

	> :hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.05);
		transition: background-color 0.1s ease-in-out;
	}
`;

export const StyledLifeEvent = styled(Link)`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.375rem;
	padding: 0 0.5rem;
	box-shadow: inset 0 0 0 0.25px rgba(0, 0, 0, 0.3);
	box-shadow: inset 0 0 0.25px 0.25px rgba(0, 0, 0, 0.2);
`;

export const StyledLifeEventTitle = styled.span`
	font-size: 0.9375rem;
	font-weight: 600;
	text-align: center;
	line-height: 1.2rem;
`;

export const StyledLifeEventDate = styled.span`
	font-size: 0.8125rem;
`;
