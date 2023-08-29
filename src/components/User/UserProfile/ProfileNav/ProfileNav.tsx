import { styled } from "styled-components";
import { Nav, NavLink } from "@jackwatters/simple-nav";
import useProfileNav from "./useProfileNav";

const Container = styled(Nav)`
	display: flex;
	padding: 0 1rem;
	height: 60px;
`;

const ProfileLink = styled(NavLink)`
	display: flex;
	align-items: center;

	button {
		height: 100%;
		font-size: 0.9rem;
		font-weight: 600;

		a {
			padding: 1rem;
			height: 100%;
		}

		a.active {
			border-bottom: 2px solid;
		}
	}
`;

const ProfileNav = () => {
	const { rootUrl, defaultLink } = useProfileNav();

	return (
		<Container>
			<ProfileLink className={defaultLink} to={`${rootUrl}/`} text="Posts" />
			<ProfileLink to={`${rootUrl}/about`} text="About" />
			<ProfileLink to={`${rootUrl}/friends`} text="Friends" />
			<ProfileLink to={`${rootUrl}/photos`} text="Photos" />
			<ProfileLink to={`${rootUrl}/videos`} text="Videos" />
			<ProfileLink to={`${rootUrl}/check-ins`} text="Check-ins" />
			{/* TODO more */}
			<ProfileLink to={`${rootUrl}/more`} text="More" />
		</Container>
	);
};

export default ProfileNav;
