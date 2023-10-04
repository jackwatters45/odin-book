import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";

interface useBirthdayProps {
	birthday: Date | undefined;
}

const useBirthday = ({ birthday }: useBirthdayProps) => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	const formattedBirthday = birthday
		? new Date(birthday)?.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
		  })
		: undefined;

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		formattedBirthday,
	};
};

export default useBirthday;
