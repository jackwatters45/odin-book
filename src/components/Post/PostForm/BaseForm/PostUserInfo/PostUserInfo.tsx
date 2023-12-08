import { Control, UseFormSetValue } from "react-hook-form";
import { Fragment } from "react";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import CreatePostAudience from "./PostAudience";
import { PostFormValues } from "../../types/PostFormTypes";
import { StyledFullName, StyledUserAvatar, StyledUserInfo } from "./PostUserInfo.styles";
import useRenderTitleSegments from "@/utils/render/titleSegment/useRenderTitleSegments";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import usePostTitle from "@/components/Post/PostForm/hooks/usePostTitle";

interface PostUserInfoProps {
	userId: string;
	avatarUrl: string | undefined;
	fullName: string;
	control: Control<PostFormValues>;
	setValue: UseFormSetValue<PostFormValues>;
	formValues: PostFormValues;
}

const PostUserInfo = ({
	userId,
	avatarUrl,
	fullName,
	control,
	setValue,
	formValues,
}: PostUserInfoProps) => {
	const postTitleSegments = usePostTitle({
		post: { ...formValues, sharedFrom: undefined },
		authorFullName: fullName,
		authorId: userId,
	});

	const renderTitleSegments = useRenderTitleSegments();

	return (
		<StyledUserInfo>
			<StyledUserAvatar>
				<ImageCircle src={avatarUrl || defaultUserAvatar} alt="avatar" />
			</StyledUserAvatar>
			<div>
				<StyledFullName>
					{postTitleSegments.map((segment, index) => (
						<Fragment key={index}>{renderTitleSegments(segment)}</Fragment>
					))}
				</StyledFullName>
				<div>
					<CreatePostAudience
						audience={formValues.audience}
						control={control}
						setValue={setValue}
					/>
				</div>
			</div>
		</StyledUserInfo>
	);
};

export default PostUserInfo;
