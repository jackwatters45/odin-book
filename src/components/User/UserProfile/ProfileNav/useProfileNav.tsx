import { useParams } from "react-router";

const useProfileNav = () => {
	const { id } = useParams();

	const rootUrl = `/user/${id}`;

	const defaultLink = !id ? "active" : "";

	return { rootUrl, defaultLink };
};

export default useProfileNav;
