import StandardLink from "@/components/Shared/StandardLink";
import styled from "styled-components";

export const EditProfileSectionHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledEditLink = styled(StandardLink)`
	font-size: 0.95rem;
	padding: 0.5rem;
	color: ${({ theme }) => theme.colors.blueButton};
`;
