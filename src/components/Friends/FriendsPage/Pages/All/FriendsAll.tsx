import Friends from "../../Components";
import FriendsAllContent from "./Content";
import FriendsAllNav from "./Nav";

const FriendsAll = () => {
	return <Friends Nav={<FriendsAllNav />} Content={<FriendsAllContent />} />;
};

export default FriendsAll;
