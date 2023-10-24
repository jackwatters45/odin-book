import { StyledIcon, TitleSegmentLink } from "./titleSegments.styles";

export type ITitleSegment =
	| { type: "text"; content: string }
	| { type: "bold"; content: string }
	| { type: "link"; content: string; linkTo: string }
	| { type: "icon"; path: string; color?: string; size?: number };

const renderTitleSegment = (segment: ITitleSegment) => {
	switch (segment.type) {
		case "text":
			return <span>{segment.content}</span>;
		case "bold":
			return (
				<span>
					<strong>{segment.content}</strong>
				</span>
			);
		case "link":
			return (
				<span>
					<strong>
						<TitleSegmentLink to={segment.linkTo}>{segment.content}</TitleSegmentLink>
					</strong>
				</span>
			);
		case "icon":
			return (
				<StyledIcon
					path={segment.path}
					size={segment.size || 1}
					color={segment.color || "#1c1e21"}
				/>
			);
	}
};

export default renderTitleSegment;
