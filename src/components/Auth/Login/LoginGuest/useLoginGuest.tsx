import useMutateCustom from "@/hooks/useMutateCustom";

const useLoginGuest = () => {
	const { mutate } = useMutateCustom({
		queryKey: ["currentUser"],
		updateDataKey: "user",
		queryUrl: "auth/login-guest",
		method: "POST",
		successNavigate: "/",
	});

	const onClick = () => mutate({});

	return { onClick };
};

export default useLoginGuest;
