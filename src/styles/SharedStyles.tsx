import TimePeriod from "@/components/Shared/TimePeriod";
import StandardSelect from "@/components/Shared/StandardSelect";
import styled, { css } from "styled-components";
import { Nav } from "@jackwatters/simple-nav";
import StandardButton from "@/components/Shared/StandardButton";

export const StandardButtonStyles = css`
	border-radius: 0.25rem;
	font-weight: 600;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 0;
	gap: 0.5rem;
`;

export const ButtonOverlay = css`
	&:hover::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.05);
	}
`;

export const StandardButtonColor = css`
	color: black;
	background-color: #e4e6eb;
`;

export const StyledButtonDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
`;

export const CenteredDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledHobbiesContainerCss = css`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export const StyledUppercaseText = styled.p`
	font-size: 0.85rem;
	font-weight: 600;
	color: #65676b;
	width: 100%;
	margin-bottom: 0.5rem;
`;

export const BottomDiv = styled.div<{ $border?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 1rem;
	border-top: ${({ $border }) => ($border ? "1px solid #dddfe2" : "none")};
`;

export const PlaceholderDiv = styled.div`
	flex-grow: 1;
`;

export const StyledDialog = styled.dialog<{ $Direction?: "left" | "right" }>`
	background: white;
	color: black;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
	border: none;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	max-width: 95vw;
	width: 700px;
	max-height: 90vh;

	h2 {
		font-size: 1.25rem;
		font-weight: 700;
	}
`;

export const StyledTextInput = styled.label`
	width: 100%;
	height: 42px;
	border-radius: 1.5rem;
	background-color: #f0f2f5;
	display: flex;
	align-items: center;
	position: relative;

	> input {
		font-size: 0.95rem;
		height: 100%;
		width: 100%;
		padding: 0 1rem;
		color: #65676b;
		outline: none;
		border-radius: 1.5rem;
		cursor: auto;
	}

	&:focus-within {
		button {
			line-height: 0;
		}
		svg {
			visibility: visible;
		}
	}
`;

export const StyledNavShadow = styled.div`
	position: absolute;
	bottom: -7px;
	height: 7px;
	width: 100%;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAOBAMAAAD3WtBsAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAD29va1cB7UAAAAB3RSTlMCCwQHGBAaZf6MKAAAABpJREFUCNdjSGNIY3BhCGUQBEJjIFQCQigAACyJAjLNW4w5AAAAAElFTkSuQmCC);
	background-size: 1px 7px;
	background-repeat: repeat-x;
	z-index: 1;
	pointer-events: none;
`;

export const StyledUserAboutFormText = styled.span`
	font-size: 0.95rem;
	font-weight: 600;
	display: block;
	margin: 1.125rem 0 0.25rem;
`;

export const StyledUserAboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

export const BoldText = styled.span`
	font-weight: 600;
`;

export const ExtraBoldText = styled.span`
	font-weight: 700;
`;

export const FullWidthStandardSelect = styled(StandardSelect)`
	width: 100%;
	margin-bottom: 1rem;
`;

export const StyledTimePeriodStartOnly = styled(TimePeriod)`
	flex-direction: row;
	align-items: center;
	padding: 0 0 0.75rem;

	> span {
		padding: 0;
	}
`;

export const StyledProfileSectionNav = styled(Nav)`
	display: flex;
	height: 60px;
`;

export const StandardButtonFullWidth = styled(StandardButton)`
	width: 100%;
`;

export const StyledUppercaseGreyText = styled.p`
	font-size: 0.8rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.textSecondary};
	text-transform: uppercase;
`;
