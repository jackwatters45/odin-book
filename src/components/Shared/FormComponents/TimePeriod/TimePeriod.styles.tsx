import styled from "styled-components";
import StandardCheckbox from "../../StandardCheckbox";

export const StyledTimePeriodContainer = styled.div`
	display: flex;
	flex-direction: column;

	padding: 0.5rem 0;
	gap: 0.5rem;
`;

export const StyledTimePeriodText = styled.span`
	font-weight: 600;
	font-size: 0.95rem;
	padding-bottom: 0.5rem;
`;

export const StyledStandardCheckbox = styled(StandardCheckbox)`
	margin-bottom: 0.5rem;
`;

export const StyledStandardCheckboxMarginTop = styled(StandardCheckbox)`
	margin: 0.5rem 0 0.75rem;
`;

export const StyledTimePeriodDatesDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	flex-wrap: wrap;

	> div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	> span {
		font-size: 0.95rem;
	}
`;
