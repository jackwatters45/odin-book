import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import { StyledCloseHomeContainer } from "./PhotosNavigationButtons.styles";

interface PhotosNavigationButtonsProps {
	goBack: () => void;
}
const PhotosNavigationButtons = ({ goBack }: PhotosNavigationButtonsProps) => {
	return (
		<StyledCloseHomeContainer>
			<button onClick={goBack}>
				<Icon path={mdiClose} size={1.2} />
			</button>
			<Link to="/">
				<ImageCircle
					src="https://res.cloudinary.com/drheg5d7j/image/upload/v1699317092/OdinBookLogo_jus0m9.png"
					alt="Odinbook"
				/>
			</Link>
		</StyledCloseHomeContainer>
	);
};

export default PhotosNavigationButtons;
