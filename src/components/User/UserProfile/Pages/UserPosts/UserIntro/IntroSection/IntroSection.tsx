import { ReactNode } from "react";

import StandardFullWidthButton from "../../../../../../Shared/StandardFullWidthButton/StandardFullWidthButton";
import { IntroCategoryContainer } from "./IntroSection.styles";

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
