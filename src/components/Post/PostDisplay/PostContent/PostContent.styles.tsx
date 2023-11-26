import styled from "styled-components";

import StandardButton from "@/components/Shared/StandardButton";

interface StyledBodyTextProps {
	$isBigText: boolean;
}

export const StyledBodyText = styled.span<StyledBodyTextProps>`
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 0.5rem;
	padding-right: 1rem;
	max-width: 100%;

	white-space: pre-line;
	overflow-wrap: break-word;
	${({ $isBigText }) =>
		$isBigText
			? `
		font-size: 1.5rem;
		font-weight: 400;
	`
			: `
		font-size: .95rem;
		font-weight: 500;
	`}
`;

export const StyledShowMoreButton = styled(StandardButton)`
	height: unset;
	padding: 0;

	&:hover::before {
		background: unset;
	}
`;
