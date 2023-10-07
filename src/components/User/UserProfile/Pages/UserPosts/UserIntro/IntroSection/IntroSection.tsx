import { ReactNode } from "react";

import { IntroCategoryContainer } from "./IntroSection.styles";
import StandardFullWidthButton from "@/components/Shared/StandardButton/StandardFullWidthButton";
import useIsOwnProfile from "@/hooks/useIsOwnProfile";

interface IntroSectionProps {
	dataExists: boolean;
	dataName: string;
	handleClickButton: () => void;
	children: ReactNode;
}

const IntroSection = ({
	dataExists,
	dataName,
	handleClickButton,
	children,
}: IntroSectionProps) => {
	const isOwnProfile = useIsOwnProfile();

	return (
		<IntroCategoryContainer>
			{children}
			{isOwnProfile && (
				<StandardFullWidthButton
					dataExists={dataExists}
					dataName={dataName}
					onClick={handleClickButton}
				/>
			)}
		</IntroCategoryContainer>
	);
};

export default IntroSection;
