import styled from "styled-components";
import MoreOptions from "@/components/Shared/MoreOptions";

export const StyledMoreOptions = styled(MoreOptions)<{ $Direction: "left" | "right" }>`
	position: relative;
	margin: 0;
	top: 0.25rem;

	dialog {
		top: 2.5rem;
		margin: 0;
	}
`;
