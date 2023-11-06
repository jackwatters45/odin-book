import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

interface UseDialogProps {
	isModal?: boolean;
	isOpenByDefault?: boolean;
	reset?: () => void;
}

const useDialog = ({
	isModal = true,
	isOpenByDefault = false,
	reset,
}: UseDialogProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	const [isOpen, setIsOpen] = useState(false);

	const [isOverflowLeft, setIsOverflowLeft] = useState(false);
	const [isOverflowRight, setIsOverflowRight] = useState(false);

	const openDialog = useCallback(() => {
		if (reset) reset();

		setIsOpen(true);

		setTimeout(() => (isModal ? ref.current?.showModal() : ref.current?.show()), 0);

		const positionDialog = () =>
			setTimeout(() => {
				const rect = ref.current?.getBoundingClientRect();

				const parentDialog = ref.current?.parentElement?.closest("dialog");
				const parentDialogRect = parentDialog?.getBoundingClientRect();

				const rightBoundaryElement = rect?.right || 0;
				const rightBoundaryParentBoundary = parentDialogRect?.right || window.innerWidth;

				const isModalOverflowingRight =
					rightBoundaryElement > rightBoundaryParentBoundary;

				const leftBoundaryElement = rect?.left || 0;
				const leftBoundaryParentBoundary = parentDialogRect?.left || 0;

				const isModalOverflowingLeft = leftBoundaryElement < leftBoundaryParentBoundary;

				if (isModalOverflowingRight) setIsOverflowRight(true);
				else setIsOverflowRight(false);

				if (isModalOverflowingLeft) setIsOverflowLeft(true);
				else setIsOverflowLeft(false);
			}, 0);
		positionDialog();
	}, [isModal, reset]);

	const closeDialog = useCallback(() => {
		ref.current?.close();
		setIsOpen(false);
	}, []);

	useEffect(() => {
		if (isOpenByDefault) openDialog();
	}, [isOpenByDefault, openDialog]);

	useLayoutEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				closeDialog();
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [closeDialog, isOpen]);

	// useEffect(() => {
	// 	const rect = ref.current?.getBoundingClientRect();

	// 	const parentDialog = ref.current?.parentElement?.closest("dialog");
	// 	const parentDialogRect = parentDialog?.getBoundingClientRect();

	// 	const rightBoundaryElement = rect?.right || 0;
	// 	const rightBoundaryParentBoundary = parentDialogRect?.right || window.innerWidth;

	// 	const isModalOverflowingRight = rightBoundaryElement > rightBoundaryParentBoundary;

	// 	const leftBoundaryElement = rect?.left || 0;
	// 	const leftBoundaryParentBoundary = parentDialogRect?.left || 0;

	// 	const isModalOverflowingLeft = leftBoundaryElement < leftBoundaryParentBoundary;

	// 	if (isModalOverflowingRight) setIsOverflowRight(true);
	// 	else setIsOverflowRight(false);

	// 	if (isModalOverflowingLeft) setIsOverflowLeft(true);
	// 	else setIsOverflowLeft(false);
	// 	}, 50);
	// }, [isOpen]);

	return {
		ref,
		openDialog,
		closeDialog,
		isOpen,
		setIsOpen,
		isOverflowLeft,
		isOverflowRight,
	};
};

export default useDialog;
