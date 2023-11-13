import { FC } from "react";

import { StyledNavDropdownDialog } from "./NavDropdown.styles";
import useNavDropdown from "./useNavDropdown";

interface NavDropdownProps {
	Button: FC<{ onClick: () => void }>;
	DialogContent: FC<{ closeDialog: () => void }>;
	className?: string;
}

const NavDropdown = ({ Button, DialogContent, className }: NavDropdownProps) => {
	const { ref, openDialog, closeDialog, isOpen } = useNavDropdown();

	return (
		<div className={className}>
			<Button onClick={openDialog} />
			{isOpen && (
				<StyledNavDropdownDialog ref={ref}>
					<DialogContent closeDialog={closeDialog} />
				</StyledNavDropdownDialog>
			)}
		</div>
	);
};

export default NavDropdown;
