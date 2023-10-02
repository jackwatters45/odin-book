import { styled, keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface SpinnerProps {
	size: number;
	speed: number;
}

const Spinner = styled.div<SpinnerProps>`
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	border: ${({ size }) => size / 4}px solid #f3f3f3;
	border-top: ${({ size }) => size / 4}px solid rgba(55, 55, 55, 0.5);
	border-radius: 50%;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	animation: ${spin} ${({ speed }) => speed}s linear infinite;
`;

interface Props {
	className?: string;
	size?: number;
	speed?: number;
}

const Loading = ({ className, size = 50, speed = 1.5 }: Props) => {
	return <Spinner className={className} size={size} speed={speed} />;
};

export default Loading;
