import StandardButton from "@/components/Shared/StandardButton";
import styled from "styled-components";

export const StyledTaggedUser = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.secondaryBlueButton};
	color: ${({ theme }) => theme.colors.secondaryBlueButtonTextColor};
	cursor: auto;

	padding: 0.125rem 0.25rem 0.125rem 0.75rem;
	font-weight: 600;
	font-size: 0.95rem;
`;

export const StyledStandardButton = styled(StandardButton)`
	border-radius: 50%;
	height: unset;
	padding: 0.375rem;
`;
