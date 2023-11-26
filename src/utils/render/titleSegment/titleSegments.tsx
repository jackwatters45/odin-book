import { CSSProperties } from "react";
import { StyledIcon, TitleSegmentLink } from "./titleSegments.styles";

export type ITitleSegment =
	| { type: "text"; content: string; style?: CSSProperties }
	| { type: "bold"; content: string; style?: CSSProperties }
	| { type: "link"; content: string; style?: CSSProperties; linkTo: string }
	| { type: "icon"; path: string; style?: CSSProperties; color?: string; size?: number };

const renderTitleSegment = (segment: ITitleSegment) => {
	switch (segment.type) {
		case "text":
			return <span style={segment.style}>{segment.content}</span>;
		case "bold":
			return (
				<span style={segment.style}>
					<strong>{segment.content}</strong>
				</span>
			);
		case "link":
			return (
				<span style={segment.style}>
					<TitleSegmentLink to={segment.linkTo}>{segment.content}</TitleSegmentLink>
				</span>
			);
		case "icon":
			return (
				<StyledIcon
					path={segment.path}
					size={segment.size || 1}
					color={segment.color || "#1c1e21"}
					style={segment.style}
				/>
			);
		default:
			return null;
	}
};

export default renderTitleSegment;
