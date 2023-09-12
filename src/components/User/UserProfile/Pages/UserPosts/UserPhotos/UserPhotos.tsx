import UserProfileSection from "@/components/Shared/UserProfileSection";
import { StyledPhoto, StyledPhotosContainer } from "./UserPhotos.styles";
import { Link } from "react-router-dom";
import useUserPhotos from "./useUserPhotos";

const UserPhotos = () => {
	const { userId, photos } = useUserPhotos();

	return (
		<UserProfileSection
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
		</UserProfileSection>
	);
};

export default UserPhotos;
