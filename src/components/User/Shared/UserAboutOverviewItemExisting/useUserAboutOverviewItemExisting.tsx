import { TitleSegment } from "../UserAboutOverviewItem/UserAboutOverviewItem";
import { StyledUserAboutOverviewLink } from "./UserAboutOverviewItemExisting.styles";

const useUserAboutOverviewItemExisting = () => {
	const renderTitleSegment = (segment: TitleSegment) => {
		switch (segment.type) {
			case "text":
				return segment.content;
			case "bold":
				return <strong>{segment.content}</strong>;
			case "link":
				return (
					<strong>
						<StyledUserAboutOverviewLink to={segment.linkTo}>
							{segment.content}
						</StyledUserAboutOverviewLink>
					</strong>
				);
		}
	};

	return {
		renderTitleSegment,
	};
};

export default useUserAboutOverviewItemExisting;
