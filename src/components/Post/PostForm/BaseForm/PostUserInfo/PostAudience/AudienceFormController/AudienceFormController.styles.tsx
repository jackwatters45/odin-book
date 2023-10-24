import styled from "styled-components";

import StandardButton from "../../../../../../Shared/StandardButton";

export const StyledCreatePostAudienceButton = styled(StandardButton)`
	height: 1.5rem;
	padding: 0.25rem 1.5rem 0.25rem 0.5rem;
	gap: 0.25rem;

	font-size: 0.75rem;

	transition: all 0.2s ease-in-out;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
	background-repeat: no-repeat;
	background-position: right 0.25rem center;
`;
