import { ImageCircle } from "@/components/Nav/Nav.styles";
import { IComment } from "@/types/IComment";
import { Link } from "react-router-dom";

interface AuthorImageProps {
	author: IComment["author"];
}

const AuthorImage = ({ author }: AuthorImageProps) => {
	return (
		<Link to={`/user/${author._id}`}>
			<ImageCircle src={author.avatarUrl} alt="profile picture" size={32} />
		</Link>
	);
};

export default AuthorImage;
