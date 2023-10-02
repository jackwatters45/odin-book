import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { StyledDialog } from "@/styles/SharedStyles";

export const StyledDetailsFormDialog = styled(StyledDialog)`
	z-index: 1002;
`;

export const FormContentContainer = styled.div`
	padding: 1.25rem 1.75rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	overflow-y: auto;
	max-height: 612px; // TODO
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

export const StyledSectionTitleHeader = styled(SectionTitle)`
	span {
		font-size: 0.95rem;
	}
`;