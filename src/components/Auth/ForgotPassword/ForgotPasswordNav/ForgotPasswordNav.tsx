import Login from "../../Login/LoginForm";

interface ForgotPasswordNavProps {
	includeLogin?: boolean;
}
const ForgotPasswordNav = ({ includeLogin = false }: ForgotPasswordNavProps) => {
	return (
		<div style={{ display: "flex", borderBottom: "1px solid white" }}>
			<img src="https://via.placeholder.com/150" alt="Odinbook" />
			{includeLogin && <Login forgotText="Account" />}
		</div>
	);
};

export default ForgotPasswordNav;
