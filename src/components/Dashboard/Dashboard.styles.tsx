import styled from "styled-components";
import CreatePostButton from "../User/UserProfile/Pages/UserPosts/CreatePostButton";

export const StyledPostsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 1rem;
`;

export const StyledCreatePostButton = styled(CreatePostButton)`
	width: 100%;
`;
