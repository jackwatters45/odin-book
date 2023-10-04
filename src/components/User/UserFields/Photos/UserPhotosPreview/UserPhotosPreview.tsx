import { Link } from "react-router-dom";

import UserProfileSectionWithLink from "@/components/User/Shared/UserProfileSection/UserProfileSectionWithLink";
import { StyledPhoto, StyledPhotosContainer } from "./UserPhotosPreview.styles";
import useUserPhotosPreview from "./useUserPhotosPreview";

const UserPhotosPreview = () => {
	const { userId, photos } = useUserPhotosPreview();

	return (
		<UserProfileSectionWithLink
			title="Photos"
			seeAllLink={{
				to: `/user/${userId}/photos`,
				text: "See all photos",
			}}
		>
			<StyledPhotosContainer>
				{photos?.slice(0, 9).map(({ media, postId }) => (
					<StyledPhoto key={media}>
						<Link to={`/post/${postId}`}>
							<img src={media} alt={"User photos"} />
						</Link>
					</StyledPhoto>
				))}
			</StyledPhotosContainer>
		</UserProfileSectionWithLink>
	);
};

export default UserPhotosPreview;
