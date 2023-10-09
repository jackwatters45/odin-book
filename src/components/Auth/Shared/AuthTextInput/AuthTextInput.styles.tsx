import styled from "styled-components";

import AboutOverviewTextInput from "@/components/Shared/TextInput/AboutOverviewTextInput";

export const StyledTextInput = styled(AboutOverviewTextInput)`
	background-color: ${({ theme }) => theme.colors.secondaryBlueButton};
	margin: 0;
`;

export const AuthTextInputContainer = styled.div`
	margin-bottom: 0.75rem;
`;

export const StyledErrorText = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.errorColor};
`;
