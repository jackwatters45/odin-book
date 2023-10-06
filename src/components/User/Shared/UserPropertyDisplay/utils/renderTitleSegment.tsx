import { StyledUserPropertyDisplayLink } from "../UserPropertyDisplay.styles";
import ITitleSegment from "../types/ITitleSegment";

const renderTitleSegment = (segment: ITitleSegment) => {
	switch (segment.type) {
		case "text":
			return segment.content;
		case "bold":
			return <strong>{segment.content}</strong>;
		case "link":
			return (
				<strong>
					<StyledUserPropertyDisplayLink to={segment.linkTo}>
						{segment.content}
					</StyledUserPropertyDisplayLink>
				</strong>
			);
	}
};

export default renderTitleSegment;
