import Login from "../../Login/LoginForm";

interface ForgotPasswordNavProps {
	includeLogin?: boolean;
}
const ForgotPasswordNav = ({ includeLogin = false }: ForgotPasswordNavProps) => {
	return (
		<div>
			<img src="https://via.placeholder.com/150" alt="Odin Book" />
			{includeLogin && <Login forgotText="Account" />}
		</div>
	);
};

export default ForgotPasswordNav;
