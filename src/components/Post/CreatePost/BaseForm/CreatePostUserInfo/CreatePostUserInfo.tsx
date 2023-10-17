import { Control, UseFormSetValue } from "react-hook-form";
import { Fragment } from "react";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import CreatePostAudience from "./CreatePostAudience";
import renderTitleSegment from "@/utils/render/titleSegment/titleSegments";
import getPostTitleSegments from "./utils/getPostTitleSegments";
import { FormValues } from "../../types/CreatePostTypes";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import { StyledFullName, StyledUserInfo } from "./CreatePostUserInfo.styles.";

interface CreatePostUserInfoProps {
	userId: string;
	avatarUrl: string | undefined;
	fullName: string;
	control: Control<FormValues>;
	setValue: UseFormSetValue<FormValues>;
	formValues: FormValues;
}

const CreatePostUserInfo = ({
	userId,
	avatarUrl,
	fullName,
	control,
	setValue,
	formValues,
}: CreatePostUserInfoProps) => {
	const postTitleSegments = getPostTitleSegments({ formValues, fullName, userId });

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
					<CreatePostAudience audience="Friends" control={control} setValue={setValue} />
				</div>
			</div>
		</StyledUserInfo>
	);
};

export default CreatePostUserInfo;
