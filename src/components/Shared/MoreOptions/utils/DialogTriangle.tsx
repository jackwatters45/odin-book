import styled from "styled-components";

const StyledSvg = styled.svg<{ $Direction: "left" | "right" }>`
	position: absolute;

	${({ $Direction }) =>
		$Direction === "left"
			? `transform: scale(-1, -1) translate(0px, 0px);
	right: 0;`
			: `left: 0;
	transform: scale(1, -1) translate(0px, 0px);`}

	bottom: calc(100% - 1px);
	box-shadow: -12px 0 28px -12px rgba(0, 0, 0, 0.2), -2px 0 4px -2px rgba(0, 0, 0, 0.1);
`;

interface DialogTriangleProps {
	Direction: "left" | "right" | undefined;
}

const DialogTriangle = ({ Direction = "left" }: DialogTriangleProps) => {
	return (
		<StyledSvg
			$Direction={Direction}
			height="12"
			viewBox="0 0 21 12"
			width="21"
			fill="white"
		>
			<path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
		</StyledSvg>
	);
};

export default DialogTriangle;
