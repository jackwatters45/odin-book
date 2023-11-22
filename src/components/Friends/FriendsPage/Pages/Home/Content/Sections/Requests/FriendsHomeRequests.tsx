import FriendsHomeSection from "../../../../../Components/HomeSection/FriendsHomeSection";
import useFriendsHomeRequests from "./useFriendsHomeRequests";
import {
	StyledPlaceholderDiv,
	StyledStandardButtonFullWidth,
} from "./FriendsHomeRequests.styles";

const FriendsHomeRequests = () => {
	const { users, isLoading, isViewMore, showViewMore, handleClickViewMore } =
		useFriendsHomeRequests();

	return (
		<FriendsHomeSection
			title="Friend Requests"
			link="/friends/requests"
			users={users}
			isLoading={isLoading}
		>
			{isViewMore && <StyledPlaceholderDiv />}
			{showViewMore && (
				<StyledStandardButtonFullWidth
					text="View More"
					colorClass="transparent-blue"
					onClick={handleClickViewMore}
				/>
			)}
		</FriendsHomeSection>
	);
};

export default FriendsHomeRequests;
