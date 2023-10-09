import styled from "styled-components";

export const StyledGenderRadioContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.5rem 0;
	font-weight: 700;
	font-size: 0.95rem;

	> div {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		gap: 0.5rem;

		> label {
			flex-grow: 1;
			cursor: pointer;

			> div > span {
				top: 1px;
			}
		}
	}
`;

export const StyledRadioContainer = styled.label`
	background-color: transparent;
	border: solid 1px ${({ theme }) => theme.colors.border};
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 2.25rem;
	padding: 0 0.375rem 0 0.75rem;
	border-radius: 0.375rem;
	transition: all 0.2s ease-in-out;
`;
