import useMutateCustom from "../../../../hooks/useMutateCustom";

const useLoginGuest = () => {
	const { mutate } = useMutateCustom({
		queryKey: "currentUser",
		queryUrl: "auth/login-guest",
		method: "POST",
	});

	const onClick = () => mutate({});

	return { onClick };
};

export default useLoginGuest;
