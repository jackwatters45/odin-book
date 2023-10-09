import useLoginGuest from "./useLoginGuest";
import StandardButton from "@/components/Shared/StandardButton";

const LoginGuest = () => {
	const { onClick } = useLoginGuest();

	return (
		<StandardButton
			colorClass="light-blue"
			text="Just looking around"
			onClick={onClick}
		/>
	);
};

export default LoginGuest;
