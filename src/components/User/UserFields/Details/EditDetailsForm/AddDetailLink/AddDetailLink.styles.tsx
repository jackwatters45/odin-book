import StandardButton from "@/components/Shared/StandardButton";

import styled from "styled-components";

export const StyledAddDetailLink = styled(StandardButton)`
	gap: 0.75rem;
	color: ${({ theme }) => theme.colors.secondaryBlueButtonTextColor};
	justify-content: flex-start;
	padding-left: 0;
`;
