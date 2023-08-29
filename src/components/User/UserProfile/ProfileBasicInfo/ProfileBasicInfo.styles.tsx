import { styled } from "styled-components";
import { StandardButtonStyles } from "../../../../styles/SharedStyles";

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
		margin: 2rem 2rem 0;
		flex-grow: 1;
	}
`;

export const StyledFriends = styled.div`
	padding: 0.75rem 0 1rem;
`;

export const StyledEditProfileButton = styled.button`
	${StandardButtonStyles}
	background-color: grey;
	font-size: 0.95rem;
`;
