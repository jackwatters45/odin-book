interface HobbiesHeaderProps {
	isHobbies: boolean;
	openDialog: () => void;
}

const HobbiesHeader = ({ isHobbies, openDialog }: HobbiesHeaderProps) => {
	return (
		<>
			<h2>Hobbies</h2>
			<button onClick={openDialog}>{isHobbies ? "Edit" : "Add"}</button>
		</>
	);
};

export default HobbiesHeader;
