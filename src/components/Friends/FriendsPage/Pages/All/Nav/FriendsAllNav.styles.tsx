import styled from "styled-components";

import { StyledHr } from "@/styles/SharedStyles";
import SearchInput from "@/components/Shared/SearchInput";

export const StyledSearchInput = styled(SearchInput)`
	margin-top: 0.75rem;
	min-height: 2.25rem;
`;

export const StyledHrAll = styled(StyledHr)`
	margin: 0.75rem 0;
	border-top: 1px solid ${({ theme }) => theme.colors.border};
	background: none;
`;
