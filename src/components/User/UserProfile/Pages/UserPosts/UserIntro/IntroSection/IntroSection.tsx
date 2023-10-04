import { ReactNode } from "react";

import { IntroCategoryContainer } from "./IntroSection.styles";
import StandardFullWidthButton from "@/components/Shared/StandardButton/StandardFullWidthButton";

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
	return (
		<IntroCategoryContainer>
			{children}
			<StandardFullWidthButton
				dataExists={dataExists}
				dataName={dataName}
				onClick={handleClickButton}
			/>
		</IntroCategoryContainer>
	);
};

export default IntroSection;
