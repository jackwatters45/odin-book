import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SendCodeConfirmation = () => {
	const { confirmationRecipient } = useParams();

	const confirmationMethod = confirmationRecipient?.includes("@") ? "email" : "phone";

	// TODOfetch crap
	const user = {
		name: "John Doe",
		username: "johndoe",
		icon: "https://picsum.photos/200",
	};

	return (
		<form>
			<h1>
				{`We'll send you a code to your ${
					confirmationMethod === "phone" ? "mobile number" : "email"
				}`}
			</h1>
			<p>We can send a login code to:</p>
			<p>{confirmationRecipient}</p>
			<div>
				<img src={user.icon} alt="Odin Book" />
				<p>{user.name}</p>
				<p>
					{user.username} • <Link to="/login">Not you?</Link>
				</p>
			</div>
			<div>
				<Link to="/login">Log in with password</Link>
				<button>
					<Link to="/recover/method">Try another way</Link>
				</button>
				<button type="submit">Continue</button>
			</div>
		</form>
	);
};

export default SendCodeConfirmation;
