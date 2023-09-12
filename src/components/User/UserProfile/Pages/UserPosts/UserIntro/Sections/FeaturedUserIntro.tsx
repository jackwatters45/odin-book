import useDialog from "@/hooks/useDialog";
import IntroSection from "../IntroSection";

interface FeaturedUserIntroProps {
	featured: string[] | undefined;
}

const FeaturedUserIntro = ({ featured }: FeaturedUserIntroProps) => {
	const { openDialog } = useDialog({});

	return (
		<IntroSection
			dataExists={!!featured}
			dataName="Featured"
			handleClickButton={openDialog}
		>
			{}
		</IntroSection>
	);
};

export default FeaturedUserIntro;
