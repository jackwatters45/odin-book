import { Control, UseFormSetValue } from "react-hook-form";
import { Fragment } from "react";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import CreatePostAudience from "./PostAudience";
import { PostFormValues } from "../../types/PostFormTypes";
import { StyledFullName, StyledUserInfo } from "./PostUserInfo.styles";
import renderTitleSegment from "@/utils/render/titleSegment/titleSegments";
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
		post: formValues,
		authorFullName: fullName,
		authorId: userId,
	});

	return (
		<StyledUserInfo>
			<span>
				<ImageCircle src={avatarUrl || defaultUserAvatar} alt="avatar" />
			</span>
			<div>
				<StyledFullName>
					{postTitleSegments.map((segment, index) => (
						<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
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