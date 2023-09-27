import styled from "styled-components";

export const StyledPostFirstRow = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin-bottom: 0.75rem;
`;

export const StyledPostFirstRowMiddle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.125rem;
	flex-grow: 1;
`;

export const StyledPostUserName = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	font-weight: 600;

	a {
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	a:hover {
		text-decoration: underline;
	}
`;

export const StyledPostDateRow = styled.div`
	display: flex;
	gap: 0.5rem;
	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledMoreButton = styled.button`
	padding: 0.375rem;
	display: flex;
	align-items: center;
	margin-right: -0.25rem;

	&:hover {
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
		transition: background-color 0.1s ease-in-out;
	}
`;
