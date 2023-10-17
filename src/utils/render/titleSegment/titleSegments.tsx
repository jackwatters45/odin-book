import { TitleSegmentLink } from "./TitleSegmentLink";

export type ITitleSegment =
	| { type: "text"; content: string }
	| { type: "bold"; content: string }
	| { type: "link"; content: string; linkTo: string };

const renderTitleSegment = (segment: ITitleSegment) => {
	switch (segment.type) {
		case "text":
			return segment.content;
		case "bold":
			return <strong>{segment.content}</strong>;
		case "link":
			return (
				<strong>
					<TitleSegmentLink to={segment.linkTo}>{segment.content}</TitleSegmentLink>
				</strong>
			);
	}
};

export default renderTitleSegment;
