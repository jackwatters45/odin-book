import { IPost, UserPreview } from "@/types/IPost";
import { ITitleSegment } from "@/utils/render/titleSegment/useRenderTitleSegments";
import formatNumberDisplay from "@/utils/format/formatNumberDisplay";

const pushYou = (segments: ITitleSegment[], currentUserId: string) =>
	segments.push({
		type: "link",
		linkTo: `/user/${currentUserId}`,
		content: "You",
	});

const pushComma = (segments: ITitleSegment[]) =>
	segments.push({
		type: "text",
		content: ", ",
	});

const pushAnd = (segments: ITitleSegment[]) =>
	segments.push({
		type: "text",
		content: " and ",
	});

const pushUser = (segments: ITitleSegment[], user: UserPreview) =>
	segments.push({
		type: "link",
		linkTo: `/user/${user?._id}`,
		content: `${user?.fullName}`,
	});

const pushOtherUsers = (segments: ITitleSegment[], reactionCount: number) =>
	segments.push({
		type: "text",
		content: ` and ${formatNumberDisplay(reactionCount - 2)} more`,
	});

const getReactionTitleSegments = (post: IPost, currentUserId: string | undefined) => {
	const reactions = post.reactions.filter(
		(reaction) => reaction.user?._id !== currentUserId,
	);

	const hasCurrentUserReacted = post.reactions.some(
		(reaction) => String(reaction.user?._id) === String(currentUserId),
	);

	const reactionCount = reactions?.length;

	const ReactionsText: ITitleSegment[] = [];

	if (hasCurrentUserReacted && currentUserId) pushYou(ReactionsText, currentUserId);

	if (reactionCount === 1) {
		if (hasCurrentUserReacted) pushAnd(ReactionsText);
		pushUser(ReactionsText, reactions[0].user);
	} else if (reactionCount === 2) {
		if (hasCurrentUserReacted) pushComma(ReactionsText);
		pushUser(ReactionsText, reactions[0].user);
		pushAnd(ReactionsText);
		pushUser(ReactionsText, reactions[1].user);
	} else if (reactionCount > 2) {
		if (hasCurrentUserReacted) pushComma(ReactionsText);
		pushUser(ReactionsText, reactions[0].user);
		pushComma(ReactionsText);
		pushUser(ReactionsText, reactions[1].user);
		pushOtherUsers(ReactionsText, reactionCount);
	}

	return ReactionsText;
};

export default getReactionTitleSegments;
