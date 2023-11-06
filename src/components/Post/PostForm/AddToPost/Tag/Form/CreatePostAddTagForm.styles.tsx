import styled from "styled-components";

export const UserSearchContainer = styled.div`
	display: flex;
	gap: 0.625rem;
	margin-right: -0.25rem;
	align-items: center;
	padding-bottom: 0.5rem;

	> :first-child {
		flex-grow: 1;
	}
`;

export const StyledDialogContent = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	max-height: 50vh;
`;

export const StyledSearchResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.25rem;
	max-height: 50vh;
	overflow-y: auto;

	> :first-child {
		margin-bottom: 0.25rem;
	}

	> div {
		padding: 0.5rem 0.5rem;
	}
`;

export const StyledSearchResults = styled.div`
	position: relative;
	min-height: 56px;
`;

export const StyledNoneFoundText = styled.span`
	display: block;
	text-align: center;
	width: 100%;
	font-weight: 600;
`;

export const StyledTaggedUsersContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding-top: 1.25rem;
`;

export const StyledTaggedUsers = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 0.25rem;
	padding: 1rem;
`;
