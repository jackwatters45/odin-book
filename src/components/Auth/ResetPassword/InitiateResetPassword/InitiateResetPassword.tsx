import { Link } from "react-router-dom";

interface Props {
	resetMethod: "phone" | "email";
	resetValue: string;
}

const InitiateResetPassword = ({ resetMethod, resetValue }: Props) => {
	return (
		<form>
			<h1>
				{`We'll send you a code to your ${
					resetMethod === "phone" ? "mobile number" : "email"
				}`}
			</h1>
			<div>
				<p>We can send a login code to:</p>
				{/* TODO format */}
				<p>{resetValue}</p>
			</div>
			<div></div>
			<div>
				<Link to="/login">Log in with password</Link>
				<button>
					<Link to="/login/recover/method">Try another way</Link>
				</button>
				<button>
					<Link to="/login/recover/code">Continue</Link>
				</button>
			</div>
		</form>
	);
};

export default InitiateResetPassword;
