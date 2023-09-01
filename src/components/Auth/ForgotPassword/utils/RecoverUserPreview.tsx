import { Link } from "react-router-dom";

import { IUser } from "@/types/IUser";

interface Props {
	user: Partial<IUser>;
	includeNotYou?: boolean;
}

const RecoverUserPreview = ({ user, includeNotYou = true }: Props) => {
	return (
		<div>
			{user.avatarUrl && <img src={user.avatarUrl} alt="User avatar" />}
			<p>{user.fullName}</p>
			<p>Odin book {user.userType}</p>
			{includeNotYou && (
				<p>
					{user.email || user.phoneNumber} • <Link to="/login">Not you?</Link>
				</p>
			)}
		</div>
	);
};

export default RecoverUserPreview;
