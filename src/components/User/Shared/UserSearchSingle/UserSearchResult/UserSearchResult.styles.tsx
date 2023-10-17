import styled from "styled-components";

export const StyledSearchResult = styled.div`
	display: flex;
	align-items: center;

	padding: 0 0.5rem;
	gap: 0.5rem;
	height: 56px;
	border-radius: 0.375rem;
	cursor: pointer;

	font-size: 0.875rem;
	font-weight: 600;

	> span {
		line-height: 0;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;
