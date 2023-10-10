import styled from "styled-components";

import StandardTextInput from "@/components/Shared/TextInput";

export const StyledTextInput = styled(StandardTextInput)`
	background-color: ${({ theme }) => theme.colors.secondaryBlueButton};
	margin: 0;
`;

export const AuthTextInputContainer = styled.div`
	margin-bottom: 0.75rem;
	position: relative;
	border-radius: 0.5rem;
`;

export const StyledErrorText = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.errorColor};
`;

export const StyledShowHideButton = styled.button`
	position: absolute;
	right: 1rem;
	top: 1.25rem;
	color: ${({ theme }) => theme.colors.blueButton};
	font-size: 1rem;
	font-weight: 600;
`;
