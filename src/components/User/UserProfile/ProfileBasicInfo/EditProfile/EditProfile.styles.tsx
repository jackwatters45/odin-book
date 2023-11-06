import { styled } from "styled-components";
import { StandardButtonFullWidth, StyledDialog } from "@/styles/SharedStyles";
import StandardButton from "@/components/Shared/StandardButton";

export const StyledEditProfileDialog = styled(StyledDialog)`
	z-index: 1001;
`;

export const StyledEditProfileContent = styled.div`
	overflow-y: auto;
	max-height: calc(90vh - 4rem);
`;

export const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.25rem 1rem 0;
	flex-grow: 1;
	overflow: hidden;

	> div {
		margin-bottom: 1rem;
	}

	> div:last-child {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const StyledStandardButton = styled(StandardButton)`
	font-size: 0.95rem;
	padding: 0 1rem;
	height: 34px;

	@media (min-width: 900px) {
		margin-bottom: 1rem;
	}
`;

export const StyledButton = styled.button`
	height: 2.5rem;
	border-radius: 0.25rem;
	width: 100%;
	color: #1877f2;
	font-size: 1rem;
	font-weight: 700;
	background: #e7f3ff;
	margin: 0.25rem;

	&:hover {
		background: #d9eaf9;
	}
`;

export const StyledStandardButtonFullWidth = styled(StandardButtonFullWidth)`
	font-size: 1rem;
	font-weight: 700;
	margin: 0.25rem;

	&:hover {
		background: #d9eaf9;
	}
`;
