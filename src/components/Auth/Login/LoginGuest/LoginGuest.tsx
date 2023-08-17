import useLoginGuest from "./useLoginGuest";

const LoginGuest = () => {
	const { onClick } = useLoginGuest();

	return (
		<div>
			Just looking around?
			<button onClick={onClick}>Login as a guest</button>
		</div>
	);
};

export default LoginGuest;
