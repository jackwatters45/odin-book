import { styled } from "styled-components";
import { ContainerWidth } from "../context/ContainerWidthType";
import { MaxWidthContainer } from "../UserProfile.styles";

export const ProfileBottomBorder = styled.div`
	position: relative;
	${({ theme }) => theme.sectionShadow}
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const StyledProfileMaxWidthContainer = styled(MaxWidthContainer)`
	margin-bottom: -80px;
	background-color: transparent;
`;

export const StyledProfileBasicInfo = styled.div<ContainerWidth>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 1rem;
	border-bottom: 1px solid #dddfe2;
	margin: 0 1rem;

	${({ $containerWidth }) => {
		if ($containerWidth >= 900) {
			return `
			flex-direction: row;
			justify-content: flex-start;

			> div:last-child {
				flex-direction: row;
				margin-top: 6rem;
			}
			`;
		}
	}}
`;

export const StyledTranslatedSection = styled.div`
	transform: translateY(-80px);
`;

export const StyledProfileRightColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	margin-top: 1rem;
`;

export const StyledNameFriendsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 900px) {
		display: block;
		margin: 0 2rem 0.75rem;
		flex: 1;
	}
`;

export const StyledFriends = styled.div`
	padding-bottom: 1rem;
	font-weight: 600;
`;

export const StyledProfileButtonContainer = styled.div`
	margin-bottom: 2rem;
`;
