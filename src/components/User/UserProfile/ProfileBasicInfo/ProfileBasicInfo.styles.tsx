import { styled } from "styled-components";

export const StyledProfileBasicInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 1rem;
	border-bottom: 1px solid #dddfe2;
	margin: 0 1rem;
	transform: translateY(-80px);
	margin-bottom: -80px;

	@media (min-width: 900px) {
		flex-direction: row;
		align-items: flex-end;
		justify-content: flex-start;
`;

export const StyledNameFriendsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 900px) {
		display: block;
		margin: 0 2rem 0.75rem;
		flex-grow: 1;
	}
`;

export const StyledFriends = styled.div`
	padding-bottom: 1rem;
	font-weight: 600;
`;

export const StyledProfileButtonContainer = styled.div`
	margin-bottom: 2rem;
`;
