import styled from "styled-components";

import PostFirstRow from "../PostFirstRow";
import { UserProfileSectionContainer } from "@/components/User/Shared/UserProfileSection/UserProfileSection.styles";
import PostPhotos from "../PostPhotos";

export const StyledSharedFromPostContainer = styled(UserProfileSectionContainer)`
	width: unset;
	padding: 0rem 1rem 1rem;
	gap: 0;
	margin-top: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 0.5rem;
`;

export const StyledPostPhotos = styled(PostPhotos)<{ $numPhotos: number }>`
	${({ $numPhotos }) => {
		return $numPhotos >= 2
			? `> :nth-child(1) {
			border-radius: 0.375rem 0 0 0;
		};
		> :nth-child(2) {
			border-radius: 0 .375rem 0 0;
		}`
			: `> :nth-child(1) {
			border-radius: 0.375rem 0.375rem 0 0;
		}`;
	}}
`;

export const StyledPostFirstRow = styled(PostFirstRow)`
	margin-top: 0.75rem;
`;
