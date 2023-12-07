import styled from "styled-components";

import PostFirstRow from "../Shared/PostFirstRow";
import PostSharedFrom from "../Shared/PostSharedFrom";
import PostPhotos from "../Shared/PostPhotos";
import PostSocialDisplay from "../PostDisplay/PostSocialDisplay";
import PostSocial from "../PostDisplay/PostSocial";
import PostComments from "./Comments/PostComments";

export const StyledViewPostScrollContainer = styled.div`
	overflow-y: auto;
	max-height: 70vh;
	padding-left: 1rem;
	padding-bottom: 0.5rem;
	overflow-x: hidden;
`;

export const StyledCommentInputContainer = styled.div`
	margin: 0.5rem;
`;

export const StyledPostFirstRow = styled(PostFirstRow)`
	margin: 0.75rem 0;
	margin-right: 0.5rem;
`;

export const StyledPostSharedFrom = styled(PostSharedFrom)`
	margin-right: 1rem;
`;

export const StyledPostPhotos = styled(PostPhotos)`
	margin-right: 1rem;
`;

export const StyledPostSocialDisplay = styled(PostSocialDisplay)`
	margin-right: 1rem;
`;

export const StyledPostSocial = styled(PostSocial)`
	margin-right: 1rem;
`;

export const StyledPostComments = styled(PostComments)`
	margin-right: 1rem;
`;
