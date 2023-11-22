import Friends from "../../Components";
// import { defaultNavUsers } from "../DELETE";
import FriendsFriendRequests from "./Content";
import FriendsRequestsNav from "./Nav";

const FriendsRequests = () => {
	return <Friends Nav={<FriendsRequestsNav />} Content={<FriendsFriendRequests />} />;
};

export default FriendsRequests;
