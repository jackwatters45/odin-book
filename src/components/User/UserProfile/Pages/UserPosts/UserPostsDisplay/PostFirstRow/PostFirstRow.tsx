import { mdiDotsHorizontal, mdiMenuRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import {
	StyledMoreButton,
	StyledPostDateRow,
	StyledPostFirstRow,
	StyledPostFirstRowMiddle,
	StyledPostUserName,
} from "./PostFirstRow.styles";

interface PostFirstRowProps {
	author: {
		id: string;
		name: string;
		avatarUrl: string;
	};
	date: string;
	to?: {
		id: string;
		name: string;
	};
}

const PostFirstRow = ({ author, date, to }: PostFirstRowProps) => {
	return (
		<StyledPostFirstRow>
			<span>
				<Link to={`/user/${author.id}`}>
					<ImageCircle src={author.avatarUrl} alt={author.name} />
				</Link>
			</span>
			<StyledPostFirstRowMiddle>
				<StyledPostUserName>
					{/* TODO hover */}
					<Link to={`/user/${author.id}`}>{author.name}</Link>
					{to && (
						<>
							<Icon path={mdiMenuRight} size={0.9} />
							<span>
								<Link to={`${to.id}`}>{to.name}</Link>
							</span>
						</>
					)}
				</StyledPostUserName>
				<StyledPostDateRow>
					<span>{date}</span>
					{/* TODO icons thangs */}
					{/* {post.addedTime && <span>{post.addedTime}</span>} */}
					{/* <span>{post.audience}</span> */}
				</StyledPostDateRow>
			</StyledPostFirstRowMiddle>
			<StyledMoreButton>
				<Icon path={mdiDotsHorizontal} size={1} />
			</StyledMoreButton>
		</StyledPostFirstRow>
	);
};

export default PostFirstRow;
