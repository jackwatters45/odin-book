import UserProfileSection from "..";
import { UserProfileSectionProps } from "../UserProfileSection";
import StandardLink from "../../../../Shared/StandardLink";

type seeAllLink = {
	to: string;
	text: string;
};

interface UserProfileSectionWithLinkProps extends UserProfileSectionProps {
	seeAllLink: seeAllLink;
}

const UserProfileSectionWithLink = ({
	seeAllLink: { to, text },
	...props
}: UserProfileSectionWithLinkProps) => {
	return (
		<UserProfileSection {...props} rightColumn={<StandardLink to={to} text={text} />} />
	);
};

export default UserProfileSectionWithLink;
