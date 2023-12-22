import styled from "styled-components";
import StandardButton from "../../StandardButton";

export const StyledRadioFormButton = styled(StandardButton)`
	gap: 0.25rem;
	background-color: ${({ theme }) => theme.colors.primaryButton};
	min-width: fit-content;

	span {
		font-size: 0.9rem;
	}

	&.icon-only {
		border-radius: 50%;
		padding: 0.25rem;
		display: flex;
		align-items: center;
		height: fit-content;
	}
`;
