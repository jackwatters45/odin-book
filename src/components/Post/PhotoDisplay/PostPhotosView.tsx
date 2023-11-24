import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

import PhotosNavigationButtons from "./PhotosNavigationButtons";
import {
	StyledDisplayedImage,
	StyledForwardBackButtons,
	StyledNextButton,
	StyledPostPhotosViewContainer,
	StyledPreviousButton,
} from "./PostPhotosView.styles";
import usePostPhotosView from "./usePostPhotosView";
import { IconCircleBackground } from "../../Nav/Nav.styles";
import Loading from "@/components/Shared/Loading";

const PostPhotosView = () => {
	const { currentPhoto, isLoading, goBack, handlePrevPhoto, handleNextPhoto } =
		usePostPhotosView();

	return isLoading ? (
		<Loading />
	) : (
		<StyledPostPhotosViewContainer>
			<PhotosNavigationButtons goBack={goBack} />
			<StyledForwardBackButtons>
				<StyledPreviousButton onClick={handlePrevPhoto}>
					<IconCircleBackground
						path={mdiChevronLeft}
						size={2.5}
						color={"#1c1e21"}
						background={"rgba(255, 255, 255, 0.3)"}
					/>
				</StyledPreviousButton>
				<StyledNextButton onClick={handleNextPhoto}>
					<IconCircleBackground
						path={mdiChevronRight}
						size={2.5}
						color={"#1c1e21"}
						background={"rgba(255, 255, 255, 0.3)"}
					/>
				</StyledNextButton>
			</StyledForwardBackButtons>
			<StyledDisplayedImage src={currentPhoto} alt="Post" />
		</StyledPostPhotosViewContainer>
	);
};

export default PostPhotosView;
