import useMutateForm from "../../../../hooks/useMutationForm";

const useLoginGuest = () => {
	const { mutate } = useMutateForm({
		queryKey: "user",
		queryUrl: "auth/login-guest",
		method: "POST",
	});

	const onClick = () => mutate({});

	return { onClick };
};

export default useLoginGuest;
