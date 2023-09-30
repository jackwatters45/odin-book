import useUserAboutOverviewItem from "@/components/Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";

interface UseAboutBirthdayProps {
	birthday: Date | undefined;
}

const useAboutBirthday = ({ birthday }: UseAboutBirthdayProps) => {
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

export default useAboutBirthday;
