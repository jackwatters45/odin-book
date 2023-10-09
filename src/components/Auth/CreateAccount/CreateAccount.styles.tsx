import styled from "styled-components";

import TimePeriod from "@/components/Shared/TimePeriod";
import { StandardButtonFullWidth } from "@/styles/SharedStyles";

export const StyledNameContainer = styled.div`
	padding-top: 1rem;
	display: flex;
	justify-content: space-evenly;
	gap: 0.75rem;
	width: 100%;
`;

export const StyledTimePeriod = styled(TimePeriod)`
	gap: 0;

	> div {
		> div {
			justify-content: space-evenly;
			width: 100%;

			select {
				flex-grow: 1;
				background-color: transparent;
				border: solid 1px ${({ theme }) => theme.colors.border};
			}
		}
	}
`;

export const StyledStandardButtonFullWidth = styled(StandardButtonFullWidth)`
	font-size: 1rem;
	font-weight: 700;
	margin: 0.75rem 0 0.5rem;

	&:hover {
		background: #d9eaf9;
	}
`;

export const StyledForgotLoginLinkContainer = styled.div`
	padding: 0.75rem 0 0.25rem;
	text-align: center;
`;
