import { useRef } from "react";
import useLazyLoad from "./useLazyLoad";
import Loading from "@/components/Shared/Loading";

interface UseDialogProps {
	isModal?: boolean;
	reset?: () => void;
}

const useDialog = ({ isModal = true, reset }: UseDialogProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	const openDialog = () => {
		if (reset) reset();
		return isModal ? ref.current?.showModal() : ref.current?.show();
	};

	const closeDialog = () => {
		ref.current?.close();
	};

	const { LazyWrapper } = useLazyLoad({
		fallback: ref.current?.open ? <Loading /> : null,
	});

	return { ref, openDialog, closeDialog, LazyWrapper };
};

export default useDialog;
