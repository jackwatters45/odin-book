import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";

const useLoginGuest = () => {
	const { mutate: createNewGuestUser } = useMutateCustom({
		queryUrl: "auth/guest-user",
		method: "POST",
	});

	const { mutate: loginGuest } = useMutateCustom({
		queryKey: ["currentUser"],
		updateDataKey: "user",
		queryUrl: "auth/login-guest",
		method: "POST",
		onSuccessFn: () => createNewGuestUser({}),
		successNavigate: "/",
	});

	const onClick = () => loginGuest({});

	return { onClick };
};

export default useLoginGuest;
