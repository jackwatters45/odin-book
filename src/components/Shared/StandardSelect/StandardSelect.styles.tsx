import styled from "styled-components";

export const StyledSelectInput = styled.select`
	height: 2.25rem;
	padding: 0.5rem 1.75rem 0.5rem 0.75rem;
	border-radius: 0.375rem;
	background-color: ${({ theme }) => theme.colors.primaryButton};
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 0.95rem;
	font-weight: 600;
	transition: all 0.2s ease-in-out;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
	background-repeat: no-repeat;
	background-position: right 0.375rem center;

	&:hover {
		border-color: ${({ theme }) => theme.colors.primaryButton};
	}

	&:focus {
		border-color: ${({ theme }) => theme.colors.primaryButton};
	}
`;
