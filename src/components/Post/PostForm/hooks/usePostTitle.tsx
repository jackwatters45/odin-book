import { getFeelingEmoji } from "@/components/Post/PostForm/AddToPost/Feeling/Constants/feelingOptions";
import { PostFormValues } from "@/components/Post/PostForm/types/PostFormTypes";
import { IPost } from "@/types/IPost";
import getSeparatorAtIndex from "@/utils/format/getSeparatorAtIndex";
import { ITitleSegment } from "@/utils/render/titleSegment/titleSegments";
import { mdiMenuRight } from "@mdi/js";

interface UsePostTitleProps {
	post: Partial<IPost>;
	authorFullName?: string;
	authorId?: string;
}

interface getPostTitleSegmentsProps {
	fullName: string;
	userId: string;
	taggedUsers: PostFormValues["taggedUsers"] | undefined;
	checkIn: PostFormValues["checkIn"] | undefined;
	feeling: PostFormValues["feeling"] | undefined;
	to: PostFormValues["to"] | undefined;
}

const getPostTitleSegments = ({
	fullName,
	userId,
	taggedUsers,
	checkIn,
	feeling,
	to,
}: getPostTitleSegmentsProps): ITitleSegment[] => {
	const postTitleSegments: ITitleSegment[] = [
		{
			type: "link",
			content: fullName,
			linkTo: `/user/${userId}`,
		},
	];

	if (feeling || taggedUsers?.length || checkIn?.city) {
		postTitleSegments.push({
			type: "text",
			content: " is ",
		});
	}

	if (feeling) {
		postTitleSegments.push({
			type: "text",
			content: ` ${getFeelingEmoji(feeling)} feeling ${feeling}`,
		});
	}

	if (taggedUsers?.length) {
		postTitleSegments.push({
			type: "text",
			content: " with ",
		});

		taggedUsers.forEach((user, index) => {
			postTitleSegments.push({
				type: "link",
				content: `${user.fullName}${getSeparatorAtIndex(index, taggedUsers.length)}`,
				linkTo: `/user/${user._id}`,
			});
		});
	}

	if (checkIn?.city) {
		const checkInSegment = checkIn?.location
			? ` at ${checkIn.location}, ${checkIn.city}`
			: ` in ${checkIn.city}`;

		postTitleSegments.push({
			type: "bold",
			content: checkInSegment,
		});
	}

	if (to?._id && to?.fullName) {
		postTitleSegments.push({
			type: "icon",
			path: mdiMenuRight,
			size: 0.7,
		});

		postTitleSegments.push({
			type: "link",
			content: to.fullName,
			linkTo: `/user/${to._id}`,
		});
	}

	return postTitleSegments;
};

const usePostTitle = ({ post, authorFullName, authorId }: UsePostTitleProps) => {
	return getPostTitleSegments({
		fullName: post.author?.fullName || (authorFullName as string),
		userId: post.author?._id || (authorId as string),
		taggedUsers: post.taggedUsers,
		checkIn: post.checkIn,
		feeling: post.feeling,
		to: post.to,
	});
};

export default usePostTitle;