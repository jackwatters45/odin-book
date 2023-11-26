import { styled } from "styled-components";

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 60px);
`;

export const ProfileBottomBorder = styled.div`
	${({ theme }) => theme.sectionShadow}
`;

export const MaxWidthContainer = styled.div`
	margin: 0 auto;
	max-width: 1250px;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const OutletWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	flex-grow: 1;
`;

export const StyledUserProfileContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 1rem 0;
	gap: 1rem;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	width: 100%;

	> div {
		width: 100%;
	}
`;
