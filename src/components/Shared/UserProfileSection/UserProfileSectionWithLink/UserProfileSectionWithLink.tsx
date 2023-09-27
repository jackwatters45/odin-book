import UserProfileSection from "..";
import { UserProfileSectionProps } from "../UserProfileSection";
import StandardLink from "../../StandardLink";

type seeAllLink = {
	to: string;
	text: string;
};

interface UserProfileSectionWithLinkProps extends UserProfileSectionProps {
	seeAllLink: seeAllLink;
}

const UserProfileSectionWithLink = ({
	seeAllLink: { to, text },
	...rest
}: UserProfileSectionWithLinkProps) => {
	return (
		<UserProfileSection {...rest} rightColumn={<StandardLink to={to} text={text} />} />
	);
};

export default UserProfileSectionWithLink;
