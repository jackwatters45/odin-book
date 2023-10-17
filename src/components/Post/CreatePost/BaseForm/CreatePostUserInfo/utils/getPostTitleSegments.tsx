import { ITitleSegment } from "@/utils/render/titleSegment/titleSegments";
import { getFeelingEmoji } from "../../../AddToPost/Feeling/Constants/feelingOptions";
import getSeparatorAtIndex from "@/utils/format/getSeparatorAtIndex";
import { FormValues } from "../../../types/CreatePostTypes";

interface getPostTitleSegmentsProps {
	formValues: FormValues;
	fullName: string;
	userId: string;
}

const getPostTitleSegments = ({
	formValues,
	fullName,
	userId,
}: getPostTitleSegmentsProps): ITitleSegment[] => {
	const postTitleSegments: ITitleSegment[] = [
		{
			type: "link",
			content: fullName,
			linkTo: `/user/${userId}`,
		},
	];
	const { taggedUsers, checkIn, feeling } = formValues;

	if (feeling || taggedUsers.length || checkIn?.city) {
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

	if (taggedUsers.length) {
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

	return postTitleSegments;
};

export default getPostTitleSegments;
